import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from '../components/common/Layout.jsx'
import { useProgress } from '../hooks/useProgress.jsx'
import { useAuth } from '../hooks/useAuth.jsx'
import SafeIcon from '../common/SafeIcon.jsx'
import * as FiIcons from 'react-icons/fi'
import { FaLinkedin, FaFacebook, FaXTwitter, FaArrowDown, FaArrowUp } from 'react-icons/fa6'
import logoImg from '../assets/AP-Networks-LearningSytems-Full-DivOf (6).png'

const { FiAward, FiDownload, FiHome, FiTarget } = FiIcons

const Conclusion = () => {
  const { user } = useAuth()
  const { progress } = useProgress()

  const [certificateUrl, setCertificateUrl] = useState(null)
  const [generating, setGenerating] = useState(false)
  const [certificateGenerated, setCertificateGenerated] = useState(false)
  const [certificateError, setCertificateError] = useState(null)

  const allChallengesCompleted = progress.completedChallenges === progress.totalChallenges

  const calculateScoreLevel = () => {
    const { completedChallenges, totalChallenges } = progress
    if (completedChallenges === totalChallenges) return 'Expert'
    if (completedChallenges >= 3) return 'Proficient'
    if (completedChallenges >= 2) return 'Developing'
    return 'Needs Training'
  }

  const generateCertificate = async () => {
    setGenerating(true)
    setCertificateError(null)
    try {
      const { jsPDF } = await import('jspdf')
      const pdf = new jsPDF('landscape')
      const pageWidth = pdf.internal.pageSize.width
      const pageHeight = pdf.internal.pageSize.height

      // Background
      pdf.setFillColor(248, 250, 252)
      pdf.rect(0, 0, pageWidth, pageHeight, 'F')

      // Border
      pdf.setDrawColor(59, 130, 246)
      pdf.setLineWidth(2)
      pdf.rect(5, 5, pageWidth - 10, pageHeight - 10)

      // Header
      pdf.setFontSize(28)
      pdf.setTextColor(59, 130, 246)
      pdf.setFont('helvetica', 'bold')
      pdf.text('CERTIFICATE OF COMPLETION', pageWidth / 2, 30, { align: 'center' })

      // Subtitle
      pdf.setFontSize(18)
      pdf.setTextColor(75, 85, 99)
      pdf.setFont('helvetica', 'normal')
      pdf.text('Document Control Navigator Training Simulation', pageWidth / 2, 45, { align: 'center' })

      // Achievement text
      pdf.setFontSize(16)
      pdf.setTextColor(17, 24, 39)
      pdf.text('This certifies that', pageWidth / 2, 65, { align: 'center' })

      // User name
      const userName = user?.full_name || user?.user_metadata?.full_name || user?.email || 'Participant'
      pdf.setFontSize(24)
      pdf.setFont('helvetica', 'bold')
      pdf.setTextColor(17, 24, 39)
      pdf.text(userName, pageWidth / 2, 80, { align: 'center' })

      // Achievement description
      pdf.setFontSize(16)
      pdf.setTextColor(75, 85, 99)
      pdf.setFont('helvetica', 'normal')
      pdf.text('has successfully completed the Document Control Navigator training simulation', pageWidth / 2, 100, { align: 'center' })
      pdf.text('and demonstrated mastery of document control fundamentals', pageWidth / 2, 115, { align: 'center' })

      // Score level
      pdf.setFontSize(20)
      pdf.setTextColor(34, 197, 94)
      pdf.setFont('helvetica', 'bold')
      pdf.text(`Achievement Level: ${calculateScoreLevel()}`, pageWidth / 2, 135, { align: 'center' })

      // Date
      pdf.setFontSize(14)
      pdf.setTextColor(107, 114, 128)
      pdf.setFont('helvetica', 'normal')
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      pdf.text(`Completed on ${date}`, pageWidth / 2, 155, { align: 'center' })

      // AP Learning Systems logo (top-left)
      try {
        const img = new Image()
        img.src = logoImg
        await new Promise((res, rej) => { img.onload = () => res(); img.onerror = (e) => rej(e) })
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0)
        const dataUrl = canvas.toDataURL('image/png')
        // Place logo comfortably inside the border and above the header
        const displayWidth = 50
        const aspect = img.naturalHeight / img.naturalWidth
        const displayHeight = displayWidth * aspect
        const logoX = 10
        const logoY = 10
        pdf.addImage(dataUrl, 'PNG', logoX, logoY, displayWidth, displayHeight)
      } catch (e) {
        // Fallback text in top-left if image fails
        pdf.setFontSize(14)
        pdf.setTextColor(59, 130, 246)
        pdf.setFont('helvetica', 'bold')
        pdf.text('AP-Learning Systems', 10, 18)
        pdf.setFontSize(10)
        pdf.setTextColor(107, 114, 128)
        pdf.setFont('helvetica', 'normal')
        pdf.text('A Division of AP-Networks LLC', 10, 24)
      }

      // Completion code and issued-to
      pdf.setFontSize(10)
      pdf.setTextColor(107, 114, 128)
      pdf.text('Completion Code: DCN0400', 15, pageHeight - 20)
      const userEmail = user?.email || user?.user_metadata?.email || ''
      if (userEmail) {
        pdf.setFontSize(8)
        pdf.text(`Issued to: ${userEmail}`, pageWidth - 15, pageHeight - 30, { align: 'right' })
      }

      // Footer
      pdf.setFontSize(8)
      pdf.text('© 2025 AP-Learning Systems, a Division of AP-Networks LLC - ALL RIGHTS RESERVED', pageWidth / 2, pageHeight - 10, { align: 'center' })

      // Output
      const pdfBlob = pdf.output('blob')
      const url = URL.createObjectURL(pdfBlob)
      setCertificateUrl(url)
      setCertificateGenerated(true)

      // Persist certificate meta (without blob URL)
      localStorage.setItem('documentControlNavigatorCertificate', JSON.stringify({
        user_id: user?.id || 'unknown',
        user_email: userEmail,
        user_name: userName,
        certificate_code: 'DCN0400',
        score_level: calculateScoreLevel(),
        total_score: progress.overallScore,
        issued_at: new Date().toISOString(),
        generated: true
      }))
    } catch (err) {
      console.error('Error generating certificate:', err)
      setCertificateError('Error generating certificate. Please retry.')
    } finally {
      setGenerating(false)
    }
  }

  const downloadCertificate = () => {
    if (!certificateUrl) {
      alert('Certificate not ready. Please generate it first.')
      return
    }
    try {
      const userName = user?.full_name || user?.user_metadata?.full_name || 'Participant'
      const fileName = `Document-Control-Navigator-Certificate-${userName.replace(/\s+/g, '-')}.pdf`
      const link = document.createElement('a')
      link.href = certificateUrl
      link.download = fileName
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error downloading certificate:', error)
      alert('There was an error downloading your certificate. Please try again.')
    }
  }

  // Auto-generate once when all challenges are completed
  useEffect(() => {
    if (allChallengesCompleted && !certificateGenerated && !generating) {
      generateCertificate()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allChallengesCompleted])

  const performanceImpacts = [
    { challenge: 'Challenge 1', impact: 'Implemented systematic document control to prevent 67% of documentation-related incidents through proper version management' },
    { challenge: 'Challenge 2', impact: 'Created field-ready work packages that improve maintenance productivity by 35% through clear, actionable instructions' },
    { challenge: 'Challenge 3', impact: 'Established Master Document Lists that reduce turnaround delays by 25% through coordinated multi-contractor workflows' },
    { challenge: 'Challenge 4', impact: 'Developed systematic improvement processes that create 25% better performance on subsequent projects through lessons learned integration' }
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-success-50 to-primary-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="w-20 h-20 bg-success-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiAward} className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Congratulations, Communication Navigator!</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You've successfully completed Document Control Navigator and proven your mastery of document control fundamentals. Your systematic approach demonstrates the advanced capabilities that distinguish expert maintenance planners.
            </p>
          </motion.div>

          {/* Performance Impact */}
          <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Document Control Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {performanceImpacts.map((item, index) => (
                <motion.div key={index} className="flex items-start space-x-3" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}>
                  <div className="w-6 h-6 bg-success-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <SafeIcon icon={FiTarget} className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.challenge}</h3>
                    <p className="text-gray-600 text-sm">{item.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Statistics */}
          <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Industry Impact - Your Skills Create Measurable Value</h2>
            <p className="text-gray-600 mb-6 text-center">Organizations implementing document control approaches like yours report:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: '67%', label: 'Reduction in documentation incidents', direction: 'down' },
                { metric: '35%', label: 'Improvement in maintenance productivity', direction: 'up' },
                { metric: '25%', label: 'Reduction in turnaround delays', direction: 'down' },
                { metric: '40%', label: 'Decrease in first-year operational problems', direction: 'down' }
              ].map((stat, index) => (
                <motion.div key={index} className="text-center" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${stat.direction === 'down' ? 'bg-green-100' : 'bg-primary-100'}`}>
                    {stat.direction === 'down' ? <FaArrowDown className="w-6 h-6 text-green-600" /> : <FaArrowUp className="w-6 h-6 text-primary-600" />}
                  </div>
                  <p className={`text-2xl font-bold mb-1 ${stat.direction === 'down' ? 'text-green-600' : 'text-primary-600'}`}>{stat.metric}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2">
                <FaArrowUp className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-medium text-gray-700">Overall Event Success trending up</span>
              </div>
            </div>
          </motion.div>

          {/* Certificate Section */}
          <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certificate of Mastery</h2>
            <div className="text-center">
              <div className="bg-gradient-to-r from-primary-500 to-success-500 rounded-lg p-6 text-white mb-6">
                <SafeIcon icon={FiAward} className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Certified Document Control Navigator Expert</h3>
                <p className="text-primary-100">Achievement Level: {calculateScoreLevel()}</p>
                <p className="text-primary-100 text-sm">Overall Score: {progress.overallScore}%</p>
                <p className="text-primary-100 text-sm mt-2">Completion Code: DCN0400</p>
                {user?.email && <p className="text-primary-100 text-xs mt-2">Issued to: {user.email}</p>}
              </div>

              <div className="space-y-4">
                {!allChallengesCompleted ? (
                  <div className="py-4">
                    <p className="text-gray-600 mb-4">Complete all 4 challenges to generate your certificate</p>
                    <Link to="/dashboard" className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                      <SafeIcon icon={FiHome} className="w-4 h-4" />
                      <span>Continue Training</span>
                    </Link>
                  </div>
                ) : generating ? (
                  <div className="flex items-center justify-center space-x-2 py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500"></div>
                    <span className="text-gray-600">Generating your certificate...</span>
                  </div>
                ) : certificateGenerated && certificateUrl ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-success-600 mb-4">
                      <SafeIcon icon={FiAward} className="w-5 h-5" />
                      <span className="font-medium">Certificate Ready!</span>
                    </div>
                    {/* Download button */}
                    <div className="space-x-4">
                      <button onClick={downloadCertificate} className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg">
                        <SafeIcon icon={FiDownload} className="w-4 h-4" />
                        <span>Download Certificate</span>
                      </button>
                    </div>
                    {/* Social Share Section - exact requested format */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-700 mb-3">Share your achievement:</p>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        {(() => {
                          const placeholderUrl = 'https://example.com/document-control-navigator'
                          const shareUrl = encodeURIComponent(placeholderUrl)
                          const placeholderToken = '[Insert Certificate Attachment]'
                          const baseText = `I just earned the Document Control Navigator certificate! ${placeholderToken}`
                          const hashTags = '#DocumentControl #Maintenance #ProfessionalDevelopment'
                          const fullText = `${baseText} ${hashTags}`
                          const shareText = encodeURIComponent(fullText)
                          const platforms = [
                            { name: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, bg: 'bg-[#0A66C2] hover:bg-[#084f94]', icon: FaLinkedin },
                            { name: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`, bg: 'bg-[#1877F2] hover:bg-[#125ec0]', icon: FaFacebook },
                            { name: 'X', href: `https://twitter.com/intent/tweet?text=${shareText}`, bg: 'bg-black hover:bg-neutral-800', icon: FaXTwitter }
                          ]
                          return (
                            <>
                              {platforms.map(p => (
                                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center space-x-2 ${p.bg} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow`}>
                                  <p.icon className="w-4 h-4" />
                                  <span>{p.name}</span>
                                </a>
                              ))}
                              <button type="button" onClick={() => { navigator.clipboard.writeText(fullText); alert('Share text copied. Replace the placeholder with your certificate attachment.') }} className="inline-flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors shadow">
                                <span>Copy Share Text</span>
                              </button>
                            </>
                          )
                        })()}
                      </div>
                      <p className="text-xs text-gray-500 mt-3">Replace the placeholder token [Insert Certificate Attachment] with your downloaded certificate or verification details when posting.</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Certificate will be generated fresh each time you download it</p>
                  </div>
                ) : (
                  <div className="py-4">
                    <button onClick={generateCertificate} disabled={generating} className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50">
                      <SafeIcon icon={FiAward} className="w-4 h-4" />
                      <span>{generating ? 'Generating...' : 'Generate Certificate'}</span>
                    </button>
                    {certificateError && (
                      <p className="text-sm text-red-600 mt-2">
                        {certificateError}
                        <button onClick={generateCertificate} className="ml-2 underline text-red-700 hover:text-red-800">Retry</button>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div className="bg-white rounded-lg shadow-lg p-8 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Next Steps for Continued Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Immediate Implementation:</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Implement systematic version control for your critical documents</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Transform existing work packages into field-ready instructions</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Establish Master Document Lists for your next turnaround</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Begin collecting systematic feedback for continuous improvement</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Professional Development:</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Pursue advanced document management certifications</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Lead organizational document control improvement initiatives</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Mentor other planners in document control best practices</a></li>
                  <li><a href="#" className="text-primary-600 hover:text-primary-700 underline">Explore other Navigator Series training modules</a></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.6 }}>
            <Link to="/dashboard" className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              <SafeIcon icon={FiHome} className="w-4 h-4" />
              <span>Return to Dashboard</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Conclusion
 