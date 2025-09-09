export const exerciseContent = {
  1: {
    id: 1,
    title: "Document Control System Design",
    description: "Design a controlled document system for your facility's P&IDs using the Document Control Matrix:",
    fields: [
      {
        id: 'version_identification',
        label: 'Version Identification System',
        type: 'textarea',
        placeholder: 'Describe your approach to uniquely identifying document versions...'
      },
      {
        id: 'distribution_method',
        label: 'Distribution Method',
        type: 'textarea',
        placeholder: 'How will you control and track document distribution...'
      },
      {
        id: 'obsolete_handling',
        label: 'Obsolete Document Handling',
        type: 'textarea',
        placeholder: 'Process for managing superseded documents...'
      },
      {
        id: 'update_notification',
        label: 'Update Notification System',
        type: 'textarea',
        placeholder: 'How will users be notified of document changes...'
      },
      {
        id: 'access_authorization',
        label: 'Access Authorization Framework',
        type: 'textarea',
        placeholder: 'Define permission levels and access control...'
      },
      {
        id: 'audit_trail',
        label: 'Audit Trail Requirements',
        type: 'textarea',
        placeholder: 'What documentation history will be maintained...'
      },
      {
        id: 'implementation_plan',
        label: 'Implementation Strategy',
        type: 'textarea',
        placeholder: 'How will you roll out this system effectively...'
      },
      {
        id: 'success_metrics',
        label: 'Success Measurement',
        type: 'textarea',
        placeholder: 'How will you measure system effectiveness...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Version Control Framework",
          points: [
            "Version Identification: Format 'P&ID-Unit100-Rev03-20231115' combining drawing number, revision, and date",
            "Distribution Method: Electronic Document Management System (EDMS) with role-based permissions and download tracking",
            "Obsolete Document Handling: Automated system withdrawal with 'SUPERSEDED' watermarks on any remaining copies",
            "Update Notification: Instant email/system alerts to all authorized users when revisions are approved"
          ]
        },
        {
          title: "Access Control and Security",
          points: [
            "Three-tier access system: View Only (operators), Download (maintenance), Edit (engineers)",
            "Role-based permissions aligned with job responsibilities and safety requirements",
            "Complete audit trail of document access, downloads, and modifications",
            "Automated backup and recovery procedures for critical documents"
          ]
        },
        {
          title: "Implementation and Measurement",
          points: [
            "Phased rollout starting with critical P&IDs and expanding systematically",
            "Training program for all users on new system procedures",
            "Success metrics: version control compliance, incident reduction, user satisfaction",
            "Regular system audits and continuous improvement based on user feedback"
          ]
        }
      ],
      keyTakeaways: [
        "Systematic document control prevents incidents by ensuring everyone works from current, approved information",
        "Electronic systems provide better control and tracking than manual processes",
        "Role-based access balances security with operational efficiency",
        "Investment in proper systems pays for itself by preventing costly errors and near-misses"
      ]
    }
  },
  2: {
    id: 2,
    title: "Work Package Translation Worksheet",
    description: "Transform technical requirements into field-ready work package instructions:",
    fields: [
      {
        id: 'technical_spec',
        label: 'Original Technical Specification',
        type: 'textarea',
        placeholder: 'Enter the engineering specification that needs translation...'
      },
      {
        id: 'task_description',
        label: 'Field-Friendly Task Description',
        type: 'textarea',
        placeholder: 'Translate into simple, clear task description...'
      },
      {
        id: 'step_instructions',
        label: 'Step-by-Step Instructions',
        type: 'textarea',
        placeholder: 'Break down into numbered, sequential steps...'
      },
      {
        id: 'safety_requirements',
        label: 'Integrated Safety Requirements',
        type: 'textarea',
        placeholder: 'Embed safety requirements directly in work steps...'
      },
      {
        id: 'tools_equipment',
        label: 'Tools and Equipment List',
        type: 'textarea',
        placeholder: 'Specify exact tools with specifications...'
      },
      {
        id: 'quality_checkpoints',
        label: 'Quality Verification Points',
        type: 'textarea',
        placeholder: 'Define measurable acceptance criteria...'
      },
      {
        id: 'visual_aids',
        label: 'Visual Aids and References',
        type: 'textarea',
        placeholder: 'Describe photos, diagrams, or marked-up drawings needed...'
      },
      {
        id: 'completion_criteria',
        label: 'Work Completion Criteria',
        type: 'textarea',
        placeholder: 'Define clear completion and sign-off requirements...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Translation Best Practices",
          points: [
            "Use simple language - 'Replace tube bundle' instead of complex technical references",
            "Create clear sequence - Numbered steps in logical execution order",
            "Embed safety requirements directly in work steps rather than separate sections",
            "Include visual aids - Photos showing proper installation and acceptance criteria"
          ]
        },
        {
          title: "Field-Ready Elements",
          points: [
            "Practical specifications - Actual torque values rather than standard references",
            "Tool requirements with specific capacities and calibration needs",
            "Quality checkpoints with measurable criteria (no gaps visible, torque to spec)",
            "Clear completion criteria that field crews can verify independently"
          ]
        },
        {
          title: "Usability Factors",
          points: [
            "Logical page layout with information in execution sequence",
            "Appropriate detail level - enough information without overwhelming users",
            "Field testing with actual maintenance personnel before finalization",
            "Integration of all safety, quality, and technical requirements in workflow"
          ]
        }
      ],
      keyTakeaways: [
        "Field-ready work packages translate engineering intent into practical execution guidance",
        "The goal is enabling efficient work completion, not demonstrating technical knowledge",
        "Visual aids and clear language significantly improve first-time completion rates",
        "Embedded safety and quality requirements prevent oversights during execution"
      ]
    }
  },
  3: {
    id: 3,
    title: "Master Document List Development",
    description: "Create a comprehensive MDL structure for your turnaround:",
    fields: [
      {
        id: 'mdl_structure',
        label: 'MDL Organization Structure',
        type: 'textarea',
        placeholder: 'Define how documents will be categorized and numbered...'
      },
      {
        id: 'status_codes',
        label: 'Status Code System',
        type: 'select',
        options: ['Draft (D), Review (R), Approved (A), Distributed (X)', 'Planning (P), Active (A), Complete (C)', 'Not Started (N), In Progress (I), Complete (C)']
      },
      {
        id: 'contractor_coordination',
        label: 'Multi-Contractor Coordination Method',
        type: 'textarea',
        placeholder: 'How will you ensure consistent processes across contractors...'
      },
      {
        id: 'document_types',
        label: 'Document Type Categories',
        type: 'textarea',
        placeholder: 'List and define all document types to be tracked...'
      },
      {
        id: 'ownership_matrix',
        label: 'Document Ownership Assignment',
        type: 'textarea',
        placeholder: 'Define clear ownership and responsibility for each document type...'
      },
      {
        id: 'distribution_matrix',
        label: 'Distribution Requirements',
        type: 'textarea',
        placeholder: 'Specify who needs which documents and when...'
      },
      {
        id: 'progress_tracking',
        label: 'Progress Tracking Method',
        type: 'textarea',
        placeholder: 'How will you monitor and report document status...'
      },
      {
        id: 'risk_mitigation',
        label: 'Risk Mitigation Strategies',
        type: 'textarea',
        placeholder: 'Plans for addressing documentation delays or gaps...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "MDL Structure and Organization",
          points: [
            "Hierarchical numbering system: Project-Area-System-Document Type-Sequence",
            "Status tracking with clear definitions: Draft (D), Review (R), Approved (A), Distributed (X)",
            "Document categories: Work Packages, Safety Documents, Inspection Plans, Procurement Documents",
            "Clear ownership assignment with primary and backup responsible parties"
          ]
        },
        {
          title: "Multi-Contractor Coordination",
          points: [
            "Unified document numbering system across all contractors",
            "Standardized templates and procedures for document creation",
            "Common document management platform with role-based access",
            "Regular coordination meetings with document status reviews"
          ]
        },
        {
          title: "Progress Tracking and Risk Management",
          points: [
            "Weekly status reports with traffic light indicators (Red/Yellow/Green)",
            "Critical path analysis identifying documents that could delay work",
            "Escalation procedures for overdue or problematic documents",
            "Contingency plans for missing or delayed critical documents"
          ]
        }
      ],
      keyTakeaways: [
        "Master Document Lists provide essential visibility and control for complex events",
        "Unified procedures across contractors prevent coordination problems",
        "Early identification of documentation gaps enables proactive problem-solving",
        "Systematic tracking transforms document management from reactive to proactive"
      ]
    }
  },
  4: {
    id: 4,
    title: "Integration and Improvement Planning",
    description: "Design comprehensive handover and continuous improvement processes:",
    fields: [
      {
        id: 'handover_checklist',
        label: 'Project Handover Checklist',
        type: 'textarea',
        placeholder: 'Define required handover documentation and verification...'
      },
      {
        id: 'asbuilt_requirements',
        label: 'As-Built Documentation Standards',
        type: 'textarea',
        placeholder: 'Specify requirements for accurate as-built documentation...'
      },
      {
        id: 'technical_package',
        label: 'Technical Data Package Contents',
        type: 'textarea',
        placeholder: 'List required technical documentation for operations...'
      },
      {
        id: 'feedback_collection',
        label: 'Systematic Feedback Collection Process',
        type: 'textarea',
        placeholder: 'How will you gather and analyze user feedback...'
      },
      {
        id: 'lesson_capture',
        label: 'Lessons Learned Documentation',
        type: 'textarea',
        placeholder: 'Process for capturing and documenting lessons learned...'
      },
      {
        id: 'template_improvement',
        label: 'Template and Process Updates',
        type: 'textarea',
        placeholder: 'How will feedback drive systematic improvements...'
      },
      {
        id: 'training_updates',
        label: 'Training Program Enhancement',
        type: 'textarea',
        placeholder: 'How will training reflect lessons learned and improvements...'
      },
      {
        id: 'success_measurement',
        label: 'Improvement Success Metrics',
        type: 'textarea',
        placeholder: 'Define measurable indicators of improvement success...'
      }
    ],
    modelAnswer: {
      sections: [
        {
          title: "Comprehensive Handover Requirements",
          points: [
            "As-Built Documentation: Physical verification walkdowns with red-line drawing incorporation",
            "Technical Data Package: Complete equipment files with test certificates and vendor manuals",
            "Operating Procedures: Operations-validated procedures with emergency response information",
            "Maintenance Procedures: Detailed maintenance plans with parts lists and skill requirements"
          ]
        },
        {
          title: "Systematic Improvement Process",
          points: [
            "Feedback Collection: Monthly maintenance crew surveys plus quarterly planner focus groups",
            "Lesson Learned Capture: Formal post-project reviews with documented improvement actions",
            "Template Updates: Quarterly template reviews incorporating field feedback and lessons learned",
            "Training Updates: Annual training refreshers highlighting common issues and best practices"
          ]
        },
        {
          title: "Measurement and Validation",
          points: [
            "Success metrics: First-time completion rates, revision frequency, user satisfaction scores",
            "Trend analysis identifying recurring issues and improvement opportunities",
            "Validation through field observations and performance data analysis",
            "Continuous refinement based on measured results and stakeholder feedback"
          ]
        }
      ],
      keyTakeaways: [
        "Integration means connecting project success with organizational learning",
        "Systematic feedback collection drives measurable improvement over time",
        "Proper handover documentation prevents operational problems and reduces costs",
        "Continuous improvement creates progressive enhancement of document control effectiveness"
      ]
    }
  }
}