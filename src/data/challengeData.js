export const challengeContent = {
  1: {
    id: 1,
    title: "Document Control Fundamentals Crisis",
    scenario: {
      time: "Monday, 8:00 AM - Maintenance Department",
      description: "You arrive to find chaos in the maintenance department. Over the weekend, a critical pump repair used outdated P&ID drawings, leading to incorrect piping connections. The safety manager is demanding answers, and the operations team is frustrated about the near-miss incident.\n\nYour investigation reveals that three different versions of the P&ID were circulating:\n• Original design from 2018\n• Red-lined version from field modifications in 2020\n• Current approved revision from 2023\n\nThe maintenance crew used the 2020 version, not knowing a newer revision existed.\n\nThe Risk: Without proper document control, your facility faces safety incidents, regulatory violations, and potential catastrophic failures."
    },
    question: "What's your immediate priority to prevent future incidents?",
    options: {
      A: "Implement a controlled document system with clear version identification and distribution tracking",
      B: "Send an email reminding everyone to use the latest drawings",
      C: "Lock all outdated drawings in the supervisor's office",
      D: "Require engineers to personally deliver drawings to work crews"
    },
    correctAnswer: "A",
    feedback: {
      A: {
        correct: true,
        message: "A controlled document system addresses the root cause by establishing systematic management throughout the document lifecycle.",
        explanation: "This creates clear version identification, distribution tracking, access control, update notifications, obsolete document removal, and audit trails. This systematic approach prevents incidents by ensuring everyone works from current, approved information."
      },
      B: {
        correct: false,
        message: "Email reminders don't create systematic control. Studies show 67% of industrial incidents involve documentation failures, and informal communications like emails don't provide the structure needed for reliable document management.",
        guidingQuestion: "How does an email prevent someone from accidentally using an outdated drawing they already have?",
        explanation: "Systematic control requires structured processes, not informal reminders that can be ignored or forgotten."
      },
      C: {
        correct: false,
        message: "This creates access problems. Research indicates that 43% of maintenance delays result from difficulty accessing required documentation. Restricting access doesn't solve version control.",
        guidingQuestion: "How will field crews get drawings when supervisors aren't available during night shifts?",
        explanation: "Access restrictions create barriers without addressing the fundamental version control problem."
      },
      D: {
        correct: false,
        message: "This approach doesn't scale and creates bottlenecks. Personal delivery doesn't address the fundamental issue of version control or ensure ongoing management of document changes.",
        guidingQuestion: "What happens when engineers are unavailable or multiple crews need the same documents simultaneously?",
        explanation: "Manual processes don't provide the systematic control needed for reliable document management."
      }
    }
  },
  2: {
    id: 2,
    title: "Field-Ready Work Package Crisis",
    scenario: {
      time: "Tuesday, 2:30 PM - Planning Office",
      description: "The maintenance crew just returned from a failed attempt to replace heat exchanger tubes. Despite having a 12-page work package, they couldn't complete the job.\n\nThe crew supervisor reports:\n• 'We had engineering drawings, but couldn't figure out which tubes to replace'\n• 'The material list showed part numbers that don't match what's actually installed'\n• 'The safety requirements were buried on page 8'\n• 'The torque specs referenced a standard we don't have access to'\n\nThis is the third failed work package this month. Crews are losing confidence in your planning, and productivity is suffering. The maintenance manager wants immediate improvement.\n\nThe Risk: Poor work packages lead to 40% average productivity losses, increased safety risks, and frustrated maintenance teams."
    },
    question: "How do you transform technical documentation into field-ready work packages?",
    options: {
      A: "Add more engineering details to ensure completeness",
      C: "Create craft-specific instructions that translate technical requirements into clear, actionable guidance",
      B: "Attach all related engineering documents to each work package",
      D: "Have engineers accompany crews to explain requirements"
    },
    correctAnswer: "C",
    feedback: {
      A: {
        correct: false,
        message: "More technical detail often makes packages harder to use. Studies show that work packages over 10 pages have 60% lower completion rates on first attempt. Information overload creates confusion rather than clarity.",
        guidingQuestion: "If maintenance crews already struggled with 12 pages, how will more pages help?",
        explanation: "Excessive detail overwhelms users and reduces effectiveness rather than improving it."
      },
      C: {
        correct: true,
        message: "Craft-specific instructions bridge the gap between engineering documentation and field execution through language translation, visual clarity, logical sequencing, safety integration, appropriate detail level, and field testing.",
        explanation: "This creates work packages that maintenance crews can execute efficiently without constant engineering consultation by converting technical requirements into practical, actionable guidance."
      },
      B: {
        correct: false,
        message: "This creates information overload without solving the translation problem. Research indicates that craft workers spend 25% of their time searching through documentation when packages aren't properly organized for field use.",
        guidingQuestion: "How does giving crews more documents help them understand which specific actions to take?",
        explanation: "More documents don't solve the fundamental problem of translating technical requirements into field-executable instructions."
      },
      D: {
        correct: false,
        message: "This doesn't scale and doesn't solve the underlying documentation problem. Engineers aren't always available, especially during night shifts or weekends when maintenance often occurs.",
        guidingQuestion: "What happens when multiple crews need engineering support simultaneously?",
        explanation: "Relying on personal consultation doesn't create sustainable, repeatable processes for field execution."
      }
    }
  },
  3: {
    id: 3,
    title: "STO Documentation Chaos",
    scenario: {
      time: "Thursday, 10:15 AM - Turnaround Office",
      description: "Your facility's major turnaround is 6 weeks away. Three contractors are mobilizing, each with different documentation systems. The turnaround manager just discovered critical issues:\n\n• 47 critical work packages are missing required documents\n• 23 engineering deliverables are behind schedule\n• Nobody can find the current Master Document List\n• Contractors are asking where to get drawings\n• Safety team needs hazard analyses that haven't been completed\n• Inspection team requires procedures that are still being written\n• Each contractor is using different numbering systems, making coordination nearly impossible\n\nThe Risk: Documentation failures cause 35% of turnaround delays and can extend shutdown duration by days, costing millions in lost production."
    },
    question: "What's your immediate action to establish control over STO documentation?",
    options: {
      A: "Tell each contractor to use their own systems and coordinate later",
      D: "Create a Master Document List (MDL) and establish unified document control procedures across all contractors",
      C: "Postpone work packages until all documents are complete",
      B: "Assign each contractor a different document control person"
    },
    correctAnswer: "D",
    feedback: {
      A: {
        correct: false,
        message: "This guarantees coordination problems. Industry data shows that 58% of multi-contractor project delays stem from incompatible documentation systems and poor information flow between organizations.",
        guidingQuestion: "How will you coordinate work between contractors if they can't share information effectively?",
        explanation: "Separate systems create coordination chaos rather than enabling effective collaboration."
      },
      D: {
        correct: true,
        message: "A Master Document List with unified procedures creates the coordination foundation essential for complex multi-contractor events through single source of truth, status visibility, standardized processes, interface management, risk mitigation, and progress tracking.",
        explanation: "This creates the structured coordination necessary for successful STO execution by establishing common standards and visibility across all contractors."
      },
      C: {
        correct: false,
        message: "This approach ignores schedule realities and doesn't solve the systemic coordination problem. Turnaround schedules have fixed dates - delaying work packages doesn't address the underlying document management issues.",
        guidingQuestion: "What happens to your turnaround schedule if you wait for every document to be perfect?",
        explanation: "Postponing work doesn't solve coordination problems and creates schedule risks that can be more costly than the documentation issues."
      },
      B: {
        correct: false,
        message: "This fragments control and creates more coordination problems. Multiple parallel systems increase confusion rather than reducing it.",
        guidingQuestion: "How does creating more separate systems solve coordination problems?",
        explanation: "Fragmented control makes coordination worse by creating multiple interfaces without common standards."
      }
    }
  },
  4: {
    id: 4,
    title: "Project Handover and Continuous Improvement",
    scenario: {
      time: "Friday, 3:45 PM - Project Office",
      description: "Your facility's capital expansion project is completing. The construction team is ready to hand over the new equipment to operations and maintenance. However, the handover documentation is incomplete:\n\n• As-built drawings don't reflect field changes\n• Test results are scattered across different systems\n• Maintenance team doesn't have technical data needed for ongoing operation\n\nSimultaneously, you're reviewing feedback from last month's completed turnaround:\n• 30% of work packages had unclear instructions\n• Document distribution was inconsistent\n• Field crews wasted time searching for information\n\nThe facility manager wants systematic improvements for future planning.\n\nThe Risk: Poor handover documentation creates ongoing operational problems, while failure to improve based on feedback perpetuates planning inefficiencies."
    },
    question: "What's your approach to ensure successful project handover while systematically improving document control practices?",
    options: {
      B: "Focus only on getting the project handed over first, then address improvement later",
      A: "Implement comprehensive handover requirements and establish systematic feedback collection to drive continuous improvement",
      C: "Let the construction team handle handover documentation while you focus on future turnarounds",
      D: "Create new procedures without reference to past experience"
    },
    correctAnswer: "A",
    feedback: {
      B: {
        correct: false,
        message: "This misses the opportunity for systematic improvement. Studies show that organizations implementing continuous improvement see 25% better performance on subsequent projects. Addressing issues in isolation prevents organizational learning.",
        guidingQuestion: "How will you prevent the same documentation problems on the next project?",
        explanation: "Sequential approaches miss learning opportunities and fail to create systematic improvement."
      },
      A: {
        correct: true,
        message: "Combining thorough handover requirements with systematic feedback collection creates both immediate success and long-term improvement through complete technical packages, as-built accuracy, systematic feedback collection, template refinement, process standardization, and organizational learning.",
        explanation: "This creates a continuous improvement cycle that progressively enhances document control effectiveness while ensuring immediate project success."
      },
      C: {
        correct: false,
        message: "Construction teams typically lack operational perspective needed for effective handover. Research indicates that 45% of operational problems in the first year stem from inadequate handover documentation.",
        guidingQuestion: "Who better understands maintenance needs - the construction team or the planners who will support ongoing operations?",
        explanation: "Construction teams focus on completion, not ongoing operational requirements that maintenance planners understand."
      },
      D: {
        correct: false,
        message: "This ignores valuable lessons learned and risks repeating past mistakes. Organizations that don't learn from experience show 40% higher rates of recurring problems.",
        guidingQuestion: "Why would you ignore feedback that could prevent future problems?",
        explanation: "Ignoring past experience wastes valuable learning opportunities and perpetuates recurring problems."
      }
    }
  }
}