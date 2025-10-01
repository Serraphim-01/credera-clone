import { ServiceDetail } from '@/types';

export const servicesData: ServiceDetail[] = [
  {
    id: 'network-solutions',
    title: 'Network Solutions',
    description: 'Comprehensive network infrastructure design, implementation, and optimization.',
    overview: 'Our network solutions provide end-to-end infrastructure design, implementation, and management services that ensure seamless connectivity, optimal performance, and scalable growth for your organization.',
    keyFeatures: [
      'Network Design & Architecture',
      'Infrastructure Implementation',
      'Performance Optimization',
      'Security Integration',
      '24/7 Monitoring & Support'
    ],
    techStacks: [
      {
        category: 'Network Equipment',
        technologies: ['Cisco', 'Juniper', 'Aruba', 'Fortinet', 'Palo Alto']
      },
      {
        category: 'Management Tools',
        technologies: ['SolarWinds', 'PRTG', 'ManageEngine', 'Nagios']
      },
      {
        category: 'Protocols & Standards',
        technologies: ['BGP', 'OSPF', 'MPLS', 'SD-WAN', 'IPv6']
      }
    ],
    certifications: [
      {
        id: 'cisco-partner',
        name: 'Cisco Gold Partner',
        issuer: 'Cisco Systems',
        imageUrl: '/certifications/cisco-gold.png',
        level: 'Gold'
      },
      {
        id: 'juniper-expert',
        name: 'Juniper Expert Partner',
        issuer: 'Juniper Networks',
        imageUrl: '/certifications/juniper-expert.png',
        level: 'Expert'
      }
    ],
    caseStudies: [
      {
        title: 'Enterprise Network Modernization',
        client: 'Fortune 500 Manufacturing Company',
        result: '40% improvement in network performance and 60% reduction in downtime',
        imageUrl: '/case-studies/network-modernization.jpg'
      }
    ],
    pricing: {
      startingPrice: '$50,000',
      priceModel: 'Project-based'
    }
  },
  {
    id: 'security-services',
    title: 'Security Services',
    description: 'Advanced cybersecurity solutions to protect your digital assets and infrastructure.',
    overview: 'Comprehensive security services including risk assessment, implementation of security frameworks, compliance management, and continuous monitoring to safeguard your organization against evolving threats.',
    keyFeatures: [
      'Security Risk Assessment',
      'Compliance Management',
      'Incident Response',
      'Penetration Testing',
      'Security Awareness Training'
    ],
    techStacks: [
      {
        category: 'Security Platforms',
        technologies: ['CrowdStrike', 'Splunk', 'IBM QRadar', 'Rapid7', 'Qualys']
      },
      {
        category: 'Compliance Frameworks',
        technologies: ['ISO 27001', 'SOC 2', 'NIST', 'GDPR', 'HIPAA']
      },
      {
        category: 'Security Tools',
        technologies: ['Wireshark', 'Metasploit', 'Nessus', 'Burp Suite', 'OWASP ZAP']
      }
    ],
    certifications: [
      {
        id: 'cissp-certified',
        name: 'CISSP Certified Team',
        issuer: '(ISC)² Security',
        imageUrl: '/certifications/cissp.png',
        level: 'Professional'
      },
      {
        id: 'iso27001-auditor',
        name: 'ISO 27001 Lead Auditor',
        issuer: 'ISO International',
        imageUrl: '/certifications/iso27001.png',
        level: 'Lead Auditor'
      }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud migration, optimization, and management services for modern enterprises.',
    overview: 'End-to-end cloud services including strategy development, migration planning, implementation, and ongoing optimization across AWS, Azure, and Google Cloud platforms.',
    keyFeatures: [
      'Cloud Strategy & Roadmap',
      'Migration Planning & Execution',
      'Multi-Cloud Management',
      'Cost Optimization',
      'DevOps Integration'
    ],
    techStacks: [
      {
        category: 'Cloud Platforms',
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'IBM Cloud', 'Oracle Cloud']
      },
      {
        category: 'Container Technologies',
        technologies: ['Docker', 'Kubernetes', 'OpenShift', 'AWS ECS', 'Azure AKS']
      },
      {
        category: 'Infrastructure as Code',
        technologies: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi', 'Azure ARM']
      }
    ],
    certifications: [
      {
        id: 'aws-partner',
        name: 'AWS Advanced Consulting Partner',
        issuer: 'Amazon Web Services',
        imageUrl: '/certifications/aws-advanced.png',
        level: 'Advanced'
      },
      {
        id: 'azure-partner',
        name: 'Microsoft Gold Partner',
        issuer: 'Microsoft',
        imageUrl: '/certifications/microsoft-gold.png',
        level: 'Gold'
      }
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Strategic digital transformation initiatives to modernize your business operations.',
    overview: 'Comprehensive digital transformation services that help organizations leverage technology to improve operations, enhance customer experiences, and drive innovation.',
    keyFeatures: [
      'Digital Strategy Development',
      'Process Automation',
      'Legacy System Modernization',
      'Customer Experience Enhancement',
      'Data-Driven Decision Making'
    ],
    techStacks: [
      {
        category: 'Automation Platforms',
        technologies: ['UiPath', 'Blue Prism', 'Automation Anywhere', 'Microsoft Power Platform', 'Zapier']
      },
      {
        category: 'Analytics & BI',
        technologies: ['Tableau', 'Power BI', 'Qlik Sense', 'Looker', 'SAS']
      },
      {
        category: 'Integration Platforms',
        technologies: ['MuleSoft', 'Dell Boomi', 'Informatica', 'Talend', 'Apache Kafka']
      }
    ],
    certifications: [
      {
        id: 'togaf-certified',
        name: 'TOGAF 9 Certified',
        issuer: 'The Open Group',
        imageUrl: '/certifications/togaf.png',
        level: 'Certified'
      }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Advanced data analytics and business intelligence solutions.',
    overview: 'Transform your data into actionable insights with our comprehensive analytics services, including data architecture, machine learning, and business intelligence solutions.',
    keyFeatures: [
      'Data Strategy & Governance',
      'Advanced Analytics & ML',
      'Business Intelligence',
      'Data Visualization',
      'Predictive Analytics'
    ],
    techStacks: [
      {
        category: 'Data Platforms',
        technologies: ['Snowflake', 'Databricks', 'Amazon Redshift', 'Google BigQuery', 'Azure Synapse']
      },
      {
        category: 'Machine Learning',
        technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Azure ML', 'AWS SageMaker']
      },
      {
        category: 'Data Engineering',
        technologies: ['Apache Spark', 'Airflow', 'dbt', 'Kafka', 'Hadoop']
      }
    ],
    certifications: [
      {
        id: 'databricks-partner',
        name: 'Databricks Consulting Partner',
        issuer: 'Databricks',
        imageUrl: '/certifications/databricks.png',
        level: 'Consulting Partner'
      }
    ]
  },
  {
    id: 'application-development',
    title: 'Application Development',
    description: 'Custom application development and modernization services.',
    overview: 'Full-stack application development services covering web, mobile, and enterprise applications with modern frameworks and cloud-native architectures.',
    keyFeatures: [
      'Full-Stack Web Development',
      'Mobile App Development',
      'API Development & Integration',
      'Microservices Architecture',
      'Application Modernization'
    ],
    techStacks: [
      {
        category: 'Frontend Technologies',
        technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js']
      },
      {
        category: 'Backend Technologies',
        technologies: ['Node.js', '.NET Core', 'Java Spring', 'Python Django', 'Go']
      },
      {
        category: 'Mobile Development',
        technologies: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Xamarin']
      }
    ],
    certifications: [
      {
        id: 'microsoft-partner',
        name: 'Microsoft Application Development Partner',
        issuer: 'Microsoft',
        imageUrl: '/certifications/microsoft-app-dev.png',
        level: 'Partner'
      }
    ]
  },
  {
    id: 'consulting-advisory',
    title: 'Consulting & Advisory',
    description: 'Strategic technology consulting and advisory services.',
    overview: 'Expert consulting services to help organizations make informed technology decisions, develop digital strategies, and optimize their IT investments.',
    keyFeatures: [
      'Technology Strategy',
      'Architecture Review',
      'Vendor Selection',
      'Digital Roadmapping',
      'IT Governance'
    ],
    techStacks: [
      {
        category: 'Methodology Frameworks',
        technologies: ['TOGAF', 'Zachman', 'ITIL', 'Agile', 'DevOps']
      },
      {
        category: 'Assessment Tools',
        technologies: ['Enterprise Architecture Tools', 'Gartner Magic Quadrant', 'Forrester Wave', 'Industry Benchmarks']
      }
    ],
    certifications: [
      {
        id: 'itil-expert',
        name: 'ITIL Expert Certified',
        issuer: 'AXELOS',
        imageUrl: '/certifications/itil-expert.png',
        level: 'Expert'
      }
    ]
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    description: '24/7 managed IT services and support for your technology infrastructure.',
    overview: 'Comprehensive managed services providing ongoing support, monitoring, and maintenance of your technology infrastructure with guaranteed SLAs.',
    keyFeatures: [
      '24/7 Infrastructure Monitoring',
      'Proactive Maintenance',
      'Help Desk Support',
      'Backup & Disaster Recovery',
      'Performance Optimization'
    ],
    techStacks: [
      {
        category: 'Monitoring Platforms',
        technologies: ['Datadog', 'New Relic', 'Splunk', 'Prometheus', 'Grafana']
      },
      {
        category: 'ITSM Tools',
        technologies: ['ServiceNow', 'Jira Service Management', 'Remedy', 'Freshservice']
      },
      {
        category: 'Backup Solutions',
        technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS Backup', 'Azure Backup']
      }
    ],
    certifications: [
      {
        id: 'servicenow-partner',
        name: 'ServiceNow Elite Partner',
        issuer: 'ServiceNow',
        imageUrl: '/certifications/servicenow-elite.png',
        level: 'Elite'
      }
    ]
  }
];

// Helper function to get service by ID
export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData.find(service => service.id === id);
};

// Helper function to get all service categories
export const getServiceCategories = () => {
  return servicesData.map(service => ({
    id: service.id,
    title: service.title,
    description: service.description
  }));
};