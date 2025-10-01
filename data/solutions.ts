import { Solution } from '@/types';

export const solutionsData: Solution[] = [
  {
    id: 'network-solutions',
    title: 'Network Solutions',
    description: 'Comprehensive network infrastructure design, implementation, and optimization to ensure seamless connectivity and performance across your organization.',
    fullDescription: 'Our network solutions provide end-to-end infrastructure design, implementation, and optimization services. We specialize in creating robust, scalable network architectures that ensure seamless connectivity and optimal performance across your entire organization.',
    heroImage: 'https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg',
    features: [
      'Network Infrastructure Design',
      'WAN/LAN Optimization',
      'Network Security Implementation',
      'Performance Monitoring',
      'Disaster Recovery Planning',
      'Network Modernization'
    ],
    benefits: [
      'Improved network performance and reliability',
      'Enhanced security and compliance',
      'Reduced operational costs',
      'Scalable infrastructure for future growth',
      '24/7 monitoring and support'
    ],
    technologies: [
      'Cisco Systems',
      'Juniper Networks',
      'Fortinet',
      'Palo Alto Networks',
      'VMware NSX',
      'Software-Defined Networking'
    ],
    certifications: [
      {
        id: 'cisco-enterprise',
        name: 'Cisco Certified Internetwork Expert (CCIE)',
        issuer: 'Cisco Systems',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert',
        validUntil: '2025-12-31'
      },
      {
        id: 'juniper-expert',
        name: 'Juniper Networks Certified Expert (JNCIE)',
        issuer: 'Juniper Networks',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      },
      {
        id: 'fortinet-architect',
        name: 'FortiGate Network Security Expert',
        issuer: 'Fortinet',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      }
    ],
    customerStories: [
      {
        id: 'global-manufacturing',
        title: 'Global Manufacturing Network Transformation',
        client: 'Fortune 500 Manufacturing Company',
        industry: 'Manufacturing',
        challenge: 'Outdated network infrastructure causing frequent downtime and poor performance across 50+ global locations.',
        solution: 'Designed and implemented a modern SD-WAN architecture with centralized management and enhanced security.',
        result: 'Achieved 99.9% uptime, reduced network costs by 40%, and improved application performance by 60%.',
        imageUrl: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg',
        testimonial: {
          quote: 'The network transformation delivered by this team exceeded our expectations. Our global operations now run seamlessly.',
          author: 'John Smith',
          title: 'Chief Technology Officer'
        },
        metrics: [
          {
            label: 'Uptime',
            value: '99.9%',
            improvement: '+15%'
          },
          {
            label: 'Cost Reduction',
            value: '40%',
            improvement: 'Saved $2M annually'
          },
          {
            label: 'Performance',
            value: '60%',
            improvement: 'Faster applications'
          }
        ]
      }
    ]
  },
  {
    id: 'enterprise-mobility',
    title: 'Enterprise Mobility',
    description: 'Mobile device management, security, and application solutions that enable your workforce to be productive from anywhere, on any device.',
    fullDescription: 'Transform your workplace with comprehensive enterprise mobility solutions. We provide mobile device management, security frameworks, and application ecosystems that empower your workforce to maintain productivity from any location, on any device.',
    heroImage: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    features: [
      'Mobile Device Management',
      'Application Security',
      'BYOD Policy Implementation',
      'Mobile Application Development',
      'Cross-platform Compatibility',
      'Remote Access Solutions'
    ],
    benefits: [
      'Increased workforce productivity',
      'Enhanced data security',
      'Reduced IT management overhead',
      'Improved employee satisfaction',
      'Cost-effective device management'
    ],
    technologies: [
      'Microsoft Intune',
      'VMware Workspace ONE',
      'Citrix Endpoint Management',
      'IBM MaaS360',
      'BlackBerry UEM',
      'Mobile Application Management'
    ],
    certifications: [
      {
        id: 'microsoft-mobility',
        name: 'Microsoft 365 Certified: Modern Desktop Administrator',
        issuer: 'Microsoft',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Associate'
      },
      {
        id: 'vmware-workspace',
        name: 'VMware Certified Professional - Digital Workspace',
        issuer: 'VMware',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Professional'
      },
      {
        id: 'citrix-mobility',
        name: 'Citrix Certified Expert - Mobility',
        issuer: 'Citrix',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      }
    ],
    customerStories: [
      {
        id: 'healthcare-mobility',
        title: 'Healthcare Mobile Workforce Transformation',
        client: 'Regional Healthcare System',
        industry: 'Healthcare',
        challenge: 'Medical staff needed secure mobile access to patient records while maintaining HIPAA compliance.',
        solution: 'Implemented comprehensive MDM solution with secure app containerization and biometric authentication.',
        result: 'Enabled 2,000+ healthcare workers to access patient data securely, improving care delivery by 35%.',
        imageUrl: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg',
        testimonial: {
          quote: 'Our medical staff can now access critical patient information instantly while maintaining the highest security standards.',
          author: 'Dr. Sarah Johnson',
          title: 'Chief Medical Officer'
        },
        metrics: [
          {
            label: 'Care Delivery',
            value: '35%',
            improvement: 'Faster response times'
          },
          {
            label: 'Security Incidents',
            value: '0',
            improvement: 'Zero breaches'
          },
          {
            label: 'User Adoption',
            value: '98%',
            improvement: 'Staff satisfaction'
          }
        ]
      }
    ]
  },
  {
    id: 'convergence-solutions',
    title: 'Convergence Solutions',
    description: 'Unified communications and infrastructure convergence that brings together voice, data, and video into a single, integrated platform.',
    fullDescription: 'Streamline your communications infrastructure with our convergence solutions. We integrate voice, data, and video communications into unified platforms that reduce complexity, improve efficiency, and enhance collaboration across your organization.',
    heroImage: 'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg',
    features: [
      'Unified Communications',
      'VoIP Implementation',
      'Video Conferencing Integration',
      'Network Convergence',
      'Legacy System Migration',
      'Quality of Service Optimization'
    ],
    benefits: [
      'Simplified infrastructure management',
      'Reduced operational costs',
      'Improved communication efficiency',
      'Enhanced collaboration capabilities',
      'Future-ready technology stack'
    ],
    technologies: [
      'Microsoft Teams',
      'Cisco Unified Communications',
      'Avaya OneCloud',
      'Mitel MiCloud',
      'RingCentral',
      'Session Initiation Protocol'
    ],
    certifications: [
      {
        id: 'cisco-collaboration',
        name: 'Cisco Certified Network Professional - Collaboration',
        issuer: 'Cisco Systems',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Professional'
      },
      {
        id: 'microsoft-teams',
        name: 'Microsoft 365 Certified: Teams Administrator',
        issuer: 'Microsoft',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Associate'
      },
      {
        id: 'avaya-specialist',
        name: 'Avaya Certified Implementation Specialist',
        issuer: 'Avaya',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Specialist'
      }
    ],
    customerStories: [
      {
        id: 'financial-convergence',
        title: 'Financial Services Communication Modernization',
        client: 'Mid-Size Investment Firm',
        industry: 'Financial Services',
        challenge: 'Disparate communication systems hindering collaboration between trading floors and client services.',
        solution: 'Unified all communications onto a single platform with advanced call routing and video integration.',
        result: 'Improved client response times by 50% and reduced communication infrastructure costs by 30%.',
        imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
        testimonial: {
          quote: 'The unified communications platform has transformed how we serve our clients and collaborate internally.',
          author: 'Michael Chen',
          title: 'Head of Operations'
        },
        metrics: [
          {
            label: 'Response Time',
            value: '50%',
            improvement: 'Faster client service'
          },
          {
            label: 'Cost Reduction',
            value: '30%',
            improvement: 'Infrastructure savings'
          },
          {
            label: 'Call Quality',
            value: '99.5%',
            improvement: 'Uptime achieved'
          }
        ]
      }
    ]
  },
  {
    id: 'collaboration-solutions',
    title: 'Collaboration Solutions',
    description: 'Modern collaboration tools and platforms that enhance teamwork, communication, and productivity across distributed teams.',
    fullDescription: 'Enable seamless collaboration with modern tools and platforms designed for today\'s distributed workforce. Our solutions enhance teamwork, streamline communication, and boost productivity across all levels of your organization.',
    heroImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    features: [
      'Collaboration Platform Integration',
      'Document Management Systems',
      'Real-time Communication Tools',
      'Project Management Solutions',
      'Virtual Meeting Platforms',
      'Workflow Automation'
    ],
    benefits: [
      'Enhanced team collaboration',
      'Improved project visibility',
      'Streamlined workflows',
      'Better resource utilization',
      'Increased organizational agility'
    ],
    technologies: [
      'Microsoft 365',
      'Google Workspace',
      'Slack Technologies',
      'Zoom Communications',
      'Atlassian Suite',
      'SharePoint Online'
    ],
    certifications: [
      {
        id: 'microsoft-365',
        name: 'Microsoft 365 Certified: Productivity Communications',
        issuer: 'Microsoft',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Associate'
      },
      {
        id: 'google-workspace',
        name: 'Google Workspace Certified Deployment Specialist',
        issuer: 'Google',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Specialist'
      },
      {
        id: 'atlassian-expert',
        name: 'Atlassian Certified Expert',
        issuer: 'Atlassian',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      }
    ],
    customerStories: [
      {
        id: 'remote-collaboration',
        title: 'Remote Team Collaboration Transformation',
        client: 'Technology Startup',
        industry: 'Technology',
        challenge: 'Rapid growth and remote work model created collaboration silos and communication gaps.',
        solution: 'Implemented integrated collaboration platform with automated workflows and centralized knowledge base.',
        result: 'Improved team productivity by 45% and reduced project delivery times by 25%.',
        imageUrl: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg',
        testimonial: {
          quote: 'Our distributed team now collaborates more effectively than when we were all in the same office.',
          author: 'Lisa Rodriguez',
          title: 'VP of Engineering'
        },
        metrics: [
          {
            label: 'Productivity',
            value: '45%',
            improvement: 'Team efficiency'
          },
          {
            label: 'Delivery Time',
            value: '25%',
            improvement: 'Faster projects'
          },
          {
            label: 'Employee Satisfaction',
            value: '92%',
            improvement: 'Positive feedback'
          }
        ]
      }
    ]
  },
  {
    id: 'security-solutions',
    title: 'Security Solutions',
    description: 'Enterprise-grade security frameworks, threat detection, and data protection solutions to safeguard your digital assets.',
    fullDescription: 'Protect your organization with comprehensive security solutions designed for today\'s threat landscape. We implement enterprise-grade security frameworks, advanced threat detection systems, and robust data protection measures.',
    heroImage: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
    features: [
      'Cybersecurity Assessment',
      'Threat Detection & Response',
      'Identity & Access Management',
      'Data Loss Prevention',
      'Security Compliance',
      'Incident Response Planning'
    ],
    benefits: [
      'Enhanced threat protection',
      'Regulatory compliance assurance',
      'Reduced security incidents',
      'Improved risk management',
      'Business continuity protection'
    ],
    technologies: [
      'CrowdStrike Falcon',
      'Microsoft Defender',
      'Palo Alto Prisma',
      'Okta Identity Management',
      'Splunk SIEM',
      'Zero Trust Architecture'
    ],
    certifications: [
      {
        id: 'cissp',
        name: 'Certified Information Systems Security Professional',
        issuer: '(ISC)²',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      },
      {
        id: 'palo-alto-ace',
        name: 'Palo Alto Networks Certified Cybersecurity Expert',
        issuer: 'Palo Alto Networks',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      },
      {
        id: 'microsoft-security',
        name: 'Microsoft Certified: Security, Compliance, and Identity',
        issuer: 'Microsoft',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      }
    ],
    customerStories: [
      {
        id: 'banking-security',
        title: 'Banking Security Infrastructure Overhaul',
        client: 'Community Bank',
        industry: 'Financial Services',
        challenge: 'Increasing cyber threats and regulatory requirements demanded advanced security posture.',
        solution: 'Implemented zero-trust architecture with AI-powered threat detection and automated response.',
        result: 'Achieved 100% compliance with banking regulations and reduced security incidents by 85%.',
        imageUrl: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
        testimonial: {
          quote: 'Our customers can trust that their financial data is protected by the most advanced security measures available.',
          author: 'Robert Kim',
          title: 'Chief Information Security Officer'
        },
        metrics: [
          {
            label: 'Security Incidents',
            value: '85%',
            improvement: 'Reduction achieved'
          },
          {
            label: 'Compliance',
            value: '100%',
            improvement: 'Regulatory adherence'
          },
          {
            label: 'Threat Detection',
            value: '99.7%',
            improvement: 'Accuracy rate'
          }
        ]
      }
    ]
  },
  {
    id: 'enterprise-applications',
    title: 'Enterprise Applications',
    description: 'Custom application development, integration, and modernization services that align with your business objectives and processes.',
    fullDescription: 'Transform your business operations with custom enterprise applications tailored to your specific needs. We provide comprehensive development, integration, and modernization services that align perfectly with your business objectives.',
    heroImage: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
    features: [
      'Custom Application Development',
      'Legacy System Modernization',
      'API Integration Services',
      'Cloud-native Development',
      'Application Portfolio Management',
      'DevOps Implementation'
    ],
    benefits: [
      'Improved operational efficiency',
      'Better business process alignment',
      'Reduced technical debt',
      'Enhanced scalability',
      'Faster time-to-market'
    ],
    technologies: [
      '.NET Framework',
      'Java Enterprise',
      'React & Angular',
      'Node.js Runtime',
      'Docker Containers',
      'Kubernetes Orchestration'
    ],
    certifications: [
      {
        id: 'aws-solutions-architect',
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Professional'
      },
      {
        id: 'microsoft-azure-architect',
        name: 'Microsoft Certified: Azure Solutions Architect',
        issuer: 'Microsoft',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      },
      {
        id: 'kubernetes-certified',
        name: 'Certified Kubernetes Application Developer',
        issuer: 'Cloud Native Computing Foundation',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Professional'
      }
    ],
    customerStories: [
      {
        id: 'retail-modernization',
        title: 'Retail Platform Modernization',
        client: 'Regional Retail Chain',
        industry: 'Retail',
        challenge: 'Legacy point-of-sale and inventory systems were hampering growth and customer experience.',
        solution: 'Built modern cloud-native applications with microservices architecture and real-time analytics.',
        result: 'Increased sales by 28% and improved inventory accuracy to 99.5% while reducing operational costs.',
        imageUrl: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg',
        testimonial: {
          quote: 'The new platform has transformed our business operations and given us the agility to compete with major retailers.',
          author: 'Amanda Thompson',
          title: 'Chief Operating Officer'
        },
        metrics: [
          {
            label: 'Sales Increase',
            value: '28%',
            improvement: 'Revenue growth'
          },
          {
            label: 'Inventory Accuracy',
            value: '99.5%',
            improvement: 'From 87%'
          },
          {
            label: 'Page Load Time',
            value: '75%',
            improvement: 'Faster performance'
          }
        ]
      }
    ]
  },
  {
    id: 'managed-support',
    title: 'Managed Support',
    description: '24/7 monitoring, maintenance, and support services to ensure your IT infrastructure operates at peak performance.',
    fullDescription: 'Ensure optimal IT performance with our comprehensive managed support services. We provide round-the-clock monitoring, proactive maintenance, and expert support to keep your infrastructure running at peak efficiency.',
    heroImage: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg',
    features: [
      '24/7 Infrastructure Monitoring',
      'Proactive Maintenance',
      'Help Desk Support',
      'Performance Optimization',
      'Patch Management',
      'Backup & Recovery Services'
    ],
    benefits: [
      'Reduced downtime',
      'Predictable IT costs',
      'Expert technical support',
      'Proactive issue resolution',
      'Improved system reliability'
    ],
    technologies: [
      'ServiceNow Platform',
      'Microsoft System Center',
      'SolarWinds Monitoring',
      'Nagios Core',
      'Splunk Infrastructure',
      'ITIL Best Practices'
    ],
    certifications: [
      {
        id: 'itil-expert',
        name: 'ITIL Expert Certification',
        issuer: 'Axelos Global Best Practice',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      },
      {
        id: 'servicenow-admin',
        name: 'ServiceNow Certified System Administrator',
        issuer: 'ServiceNow',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Administrator'
      },
      {
        id: 'microsoft-enterprise',
        name: 'Microsoft Certified: Enterprise Administrator',
        issuer: 'Microsoft',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      }
    ],
    customerStories: [
      {
        id: 'manufacturing-support',
        title: 'Manufacturing IT Infrastructure Management',
        client: 'Automotive Parts Manufacturer',
        industry: 'Manufacturing',
        challenge: 'Critical production systems experiencing frequent downtime affecting manufacturing schedules.',
        solution: 'Implemented 24/7 monitoring with predictive analytics and automated remediation procedures.',
        result: 'Achieved 99.8% uptime and reduced mean time to resolution from hours to minutes.',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        testimonial: {
          quote: 'The managed support team acts as an extension of our IT department, keeping our production lines running smoothly.',
          author: 'David Park',
          title: 'IT Director'
        },
        metrics: [
          {
            label: 'Uptime',
            value: '99.8%',
            improvement: 'From 94.2%'
          },
          {
            label: 'Resolution Time',
            value: '95%',
            improvement: 'Faster fixes'
          },
          {
            label: 'Cost Savings',
            value: '40%',
            improvement: 'IT operational costs'
          }
        ]
      }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud migration, architecture, and optimization services that leverage the power of modern cloud platforms for scalability and efficiency.',
    fullDescription: 'Harness the full potential of cloud computing with our comprehensive cloud solutions. We provide expert migration services, architectural design, and optimization strategies that maximize scalability, efficiency, and cost-effectiveness.',
    heroImage: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
    features: [
      'Cloud Migration Strategy',
      'Multi-cloud Architecture',
      'Cloud Security Implementation',
      'Cost Optimization',
      'DevOps Automation',
      'Disaster Recovery Planning'
    ],
    benefits: [
      'Improved scalability and flexibility',
      'Reduced infrastructure costs',
      'Enhanced disaster recovery',
      'Faster deployment cycles',
      'Better resource utilization'
    ],
    technologies: [
      'Amazon Web Services',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Terraform Infrastructure',
      'Kubernetes Services',
      'Serverless Computing'
    ],
    certifications: [
      {
        id: 'aws-certified-architect',
        name: 'AWS Certified Solutions Architect - Professional',
        issuer: 'Amazon Web Services',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Professional'
      },
      {
        id: 'azure-architect-expert',
        name: 'Microsoft Azure Architect Expert',
        issuer: 'Microsoft',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Expert'
      },
      {
        id: 'gcp-cloud-architect',
        name: 'Google Cloud Professional Cloud Architect',
        issuer: 'Google Cloud',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        level: 'Professional'
      }
    ],
    customerStories: [
      {
        id: 'media-cloud-migration',
        title: 'Media Company Cloud Transformation',
        client: 'Digital Media Publisher',
        industry: 'Media & Entertainment',
        challenge: 'On-premises infrastructure couldn\'t handle peak traffic loads during viral content events.',
        solution: 'Migrated to multi-cloud architecture with auto-scaling and global content delivery network.',
        result: 'Handled 10x traffic spikes seamlessly while reducing infrastructure costs by 35%.',
        imageUrl: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
        testimonial: {
          quote: 'The cloud transformation gave us the scalability we needed to handle viral content without breaking the bank.',
          author: 'Jennifer Walsh',
          title: 'Chief Technology Officer'
        },
        metrics: [
          {
            label: 'Traffic Capacity',
            value: '10x',
            improvement: 'Peak load handling'
          },
          {
            label: 'Cost Reduction',
            value: '35%',
            improvement: 'Infrastructure savings'
          },
          {
            label: 'Deployment Speed',
            value: '80%',
            improvement: 'Faster releases'
          }
        ]
      }
    ]
  }
];

// Utility functions for solution data management
export function getAllSolutions(): Solution[] {
  return solutionsData;
}

export function getSolutionById(id: string): Solution | undefined {
  return solutionsData.find(solution => solution.id === id);
}

export function generateSolutionSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function getSolutionsByIds(ids: string[]): Solution[] {
  return solutionsData.filter(solution => ids.includes(solution.id));
}

// Generate static paths for Next.js static generation
export function generateStaticParams() {
  return solutionsData.map(solution => ({
    solutionId: solution.id
  }));
}