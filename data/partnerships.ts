export interface Partnership {
  id: string;
  name: string;
  description: string;
  partnershipLevel: string;
  certifications: string[];
  whatWeDo: string;
  partnerStory: string;
  logo: string;
  heroImage: string;
  website: string;
  category: 'technology' | 'hardware' | 'infrastructure' | 'enterprise' | 'security';
  specializations: string[];
}

export const partnerships: Partnership[] = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    description: 'Microsoft Corporation is a multinational technology corporation that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    partnershipLevel: 'Gold Certified Partner',
    certifications: [
      'Microsoft Certified Partner',
      'Azure Solutions Architect Expert',
      'Microsoft 365 Certified Enterprise Administrator Expert',
      'Azure DevOps Engineer Expert'
    ],
    whatWeDo: 'We provide comprehensive Microsoft solutions including cloud migration to Azure, Microsoft 365 deployment and management, Power Platform development, and custom application development using Microsoft technologies. Our expertise spans across Windows Server, SQL Server, SharePoint, and modern workplace solutions.',
    partnerStory: 'Our partnership with Microsoft began over a decade ago when we helped a Fortune 500 client migrate their entire infrastructure to Microsoft technologies. Since then, we\'ve completed over 200 successful Microsoft-based implementations, ranging from small business Office 365 deployments to enterprise-scale Azure cloud transformations. Our certified team has consistently delivered measurable ROI through Microsoft solutions.',
    logo: '/images/partners/microsoft-logo.svg',
    heroImage: 'https://picsum.photos/seed/microsoft/1920/1080',
    website: 'https://microsoft.com',
    category: 'technology',
    specializations: ['Cloud Migration', 'Azure Infrastructure', 'Microsoft 365', 'Power Platform', 'Modern Workplace']
  },
  {
    id: 'dell',
    name: 'Dell Technologies',
    description: 'Dell Technologies is a multinational computer technology company that develops, sells, repairs, and supports computers and related products and services.',
    partnershipLevel: 'Premier Partner',
    certifications: [
      'Dell EMC Proven Professional',
      'VxRail Specialist',
      'PowerEdge Specialist',
      'Data Protection Specialist'
    ],
    whatWeDo: 'We design and implement Dell infrastructure solutions including server deployments, storage solutions, networking equipment, and hyper-converged infrastructure. Our services include hardware procurement, installation, configuration, and ongoing support for Dell enterprise systems.',
    partnerStory: 'Our Dell partnership was forged through a critical datacenter transformation project where we replaced aging infrastructure with Dell PowerEdge servers and EMC storage solutions. The project was completed ahead of schedule and under budget, establishing our reputation as a trusted Dell implementation partner. We\'ve since deployed over $50M in Dell infrastructure across various industries.',
    logo: '/images/partners/dell-logo.svg',
    heroImage: 'https://picsum.photos/seed/dell/1920/1080',
    website: 'https://dell.com',
    category: 'hardware',
    specializations: ['Server Infrastructure', 'Storage Solutions', 'Hyper-converged Infrastructure', 'Datacenter Modernization']
  },
  {
    id: 'aws',
    name: 'Amazon Web Services (AWS)',
    description: 'Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments.',
    partnershipLevel: 'Advanced Consulting Partner',
    certifications: [
      'AWS Solutions Architect Professional',
      'AWS DevOps Engineer Professional',
      'AWS Security Specialty',
      'AWS Advanced Networking Specialty'
    ],
    whatWeDo: 'We architect and implement AWS cloud solutions including infrastructure migration, serverless applications, containerized workloads, and cloud-native development. Our expertise covers EC2, S3, RDS, Lambda, EKS, and comprehensive DevOps practices on AWS.',
    partnerStory: 'Our AWS journey started with a startup that needed to scale rapidly. We built their entire infrastructure on AWS, enabling them to handle 10x traffic growth without downtime. This success led to our Advanced Partner status and over 150 successful AWS implementations, including several Well-Architected Framework reviews and cost optimization projects that saved clients millions.',
    logo: '/images/partners/aws-logo.svg',
    heroImage: 'https://picsum.photos/seed/aws/1920/1080',
    website: 'https://aws.amazon.com',
    category: 'technology',
    specializations: ['Cloud Architecture', 'Serverless Computing', 'Container Orchestration', 'DevOps Automation', 'Cost Optimization']
  },
  {
    id: 'cisco',
    name: 'Cisco Systems',
    description: 'Cisco Systems is an American multinational technology conglomerate that develops, manufactures and sells networking hardware, software, telecommunications equipment and other high-technology services and products.',
    partnershipLevel: 'Gold Certified Partner',
    certifications: [
      'Cisco Certified Network Professional (CCNP)',
      'Cisco Certified Internetwork Expert (CCIE)',
      'Cisco Security Specialist',
      'Cisco Collaboration Specialist'
    ],
    whatWeDo: 'We design and deploy Cisco networking solutions including enterprise networking, security appliances, collaboration tools, and wireless infrastructure. Our services encompass network architecture, implementation, security hardening, and ongoing network management.',
    partnerStory: 'Our Cisco partnership was established when we successfully designed and implemented a global network infrastructure for a multinational corporation, connecting 50+ offices across 15 countries. The project involved Cisco routers, switches, firewalls, and collaboration tools, all delivered on time and meeting strict security requirements. This achievement earned us Gold Partner status and numerous follow-up engagements.',
    logo: '/images/partners/cisco-logo.svg',
    heroImage: 'https://picsum.photos/seed/cisco/1920/1080',
    website: 'https://cisco.com',
    category: 'technology',
    specializations: ['Network Infrastructure', 'Security Solutions', 'Collaboration Tools', 'Wireless Solutions', 'SD-WAN']
  },
  {
    id: 'ibm',
    name: 'IBM',
    description: 'International Business Machines Corporation (IBM) is an American multinational technology corporation that produces and sells computer hardware, middleware and software, and provides hosting and consulting services.',
    partnershipLevel: 'Business Partner',
    certifications: [
      'IBM Certified Solution Advisor',
      'IBM Cloud Professional Architect',
      'IBM Watson Specialist',
      'IBM Security Specialist'
    ],
    whatWeDo: 'We implement IBM enterprise solutions including IBM Cloud, Watson AI services, enterprise software, and mainframe modernization. Our expertise spans IBM middleware, database solutions, and artificial intelligence implementations.',
    partnerStory: 'Our IBM partnership began with a complex mainframe modernization project for a financial services client. We successfully migrated legacy systems to modern IBM platforms while maintaining 99.99% uptime. This project showcased our ability to handle mission-critical IBM implementations and led to our certification in multiple IBM technologies.',
    logo: '/images/partners/ibm-logo.svg',
    heroImage: 'https://picsum.photos/seed/ibm/1920/1080',
    website: 'https://ibm.com',
    category: 'technology',
    specializations: ['Enterprise Software', 'AI and Watson', 'Cloud Services', 'Mainframe Modernization', 'Data Analytics']
  },
  {
    id: 'checkpoint',
    name: 'Check Point Software',
    description: 'Check Point Software Technologies is an Israeli multinational provider of software and combined hardware and software products for IT security, including network security, endpoint security, cloud security, mobile security, data security and security management.',
    partnershipLevel: 'Certified Security Expert',
    certifications: [
      'Check Point Certified Security Administrator (CCSA)',
      'Check Point Certified Security Expert (CCSE)',
      'Check Point Certified Master (CCSM)',
      'CloudGuard Specialist'
    ],
    whatWeDo: 'We implement comprehensive Check Point security solutions including firewalls, intrusion prevention systems, endpoint protection, and cloud security. Our services cover security architecture design, implementation, policy configuration, and ongoing security management.',
    partnerStory: 'Our Check Point partnership was established through a high-profile security implementation for a government agency requiring the highest levels of protection. We deployed Check Point\'s next-generation firewalls and threat prevention solutions, achieving certification compliance and preventing multiple sophisticated attack attempts. This success established our reputation as a trusted Check Point security implementer.',
    logo: '/images/partners/checkpoint-logo.svg',
    heroImage: 'https://picsum.photos/seed/checkpoint/1920/1080',
    website: 'https://checkpoint.com',
    category: 'security',
    specializations: ['Network Security', 'Endpoint Protection', 'Cloud Security', 'Threat Prevention', 'Security Management']
  },
  {
    id: 'huawei',
    name: 'Huawei',
    description: 'Huawei Technologies Co., Ltd. is a Chinese multinational technology corporation that designs, develops, and sells telecommunications equipment and consumer electronics.',
    partnershipLevel: 'Authorized Partner',
    certifications: [
      'Huawei Certified Network Professional',
      'Huawei Cloud Solutions Architect',
      'Huawei Storage Specialist',
      'Huawei Wireless Expert'
    ],
    whatWeDo: 'We deploy Huawei telecommunications and enterprise solutions including networking equipment, storage systems, cloud solutions, and wireless infrastructure. Our expertise covers Huawei enterprise products and telecommunications infrastructure.',
    partnerStory: 'Our Huawei partnership developed through telecommunications infrastructure projects in emerging markets. We successfully deployed Huawei networking and wireless solutions for multiple service providers, demonstrating our capability to implement large-scale telecommunications infrastructure using Huawei technologies.',
    logo: '/images/partners/huawei-logo.svg',
    heroImage: 'https://picsum.photos/seed/huawei/1920/1080',
    website: 'https://huawei.com',
    category: 'hardware',
    specializations: ['Telecommunications', 'Networking Equipment', 'Storage Systems', 'Wireless Infrastructure', 'Cloud Solutions']
  },
  {
    id: 'hp',
    name: 'HP Inc.',
    description: 'HP Inc. is an American multinational information technology company that develops personal computers, printers and related supplies, as well as 3D printing solutions.',
    partnershipLevel: 'Preferred Partner',
    certifications: [
      'HP Certified Professional',
      'HP Print Security Specialist',
      'HP Workstation Specialist',
      'HP Device as a Service Expert'
    ],
    whatWeDo: 'We provide HP desktop and mobile computing solutions, printing infrastructure, and managed print services. Our services include device procurement, deployment, configuration, and ongoing support for HP hardware across enterprise environments.',
    partnerStory: 'Our HP partnership was built through a comprehensive workplace transformation project where we replaced 5,000+ desktop computers and implemented a centralized printing infrastructure. The project improved productivity and reduced costs by 30%, establishing our expertise in large-scale HP device deployments.',
    logo: '/images/partners/hp-logo.svg',
    heroImage: 'https://picsum.photos/seed/hp/1920/1080',
    website: 'https://hp.com',
    category: 'hardware',
    specializations: ['Desktop Computing', 'Mobile Workstations', 'Printing Solutions', 'Device Management', 'Workplace Technology']
  },
  {
    id: 'hpe',
    name: 'Hewlett Packard Enterprise (HPE)',
    description: 'Hewlett Packard Enterprise Company is an American multinational enterprise information technology company that provides hardware, software and services to businesses.',
    partnershipLevel: 'Silver Partner',
    certifications: [
      'HPE Master Accredited Solutions Expert (Master ASE)',
      'HPE ProLiant Server Specialist',
      'HPE Storage Solutions Architect',
      'HPE Hybrid Cloud Specialist'
    ],
    whatWeDo: 'We implement HPE enterprise infrastructure including servers, storage, networking, and hybrid cloud solutions. Our expertise covers HPE ProLiant servers, 3PAR storage, Aruba networking, and HPE GreenLake cloud services.',
    partnerStory: 'Our HPE partnership was forged through a critical datacenter consolidation project where we migrated from legacy infrastructure to HPE Synergy composable infrastructure. The implementation reduced power consumption by 40% and improved performance by 60%, earning recognition from HPE as a top-performing partner.',
    logo: '/images/partners/hpe-logo.svg',
    heroImage: 'https://picsum.photos/seed/hpe/1920/1080',
    website: 'https://hpe.com',
    category: 'hardware',
    specializations: ['Server Infrastructure', 'Storage Solutions', 'Hybrid Cloud', 'Composable Infrastructure', 'Edge Computing']
  },
  {
    id: 'apple',
    name: 'Apple Inc.',
    description: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.',
    partnershipLevel: 'Authorized Reseller',
    certifications: [
      'Apple Certified Mac Technician',
      'Apple Certified iOS Technician',
      'Apple Device Deployment Specialist',
      'Apple Business Manager Expert'
    ],
    whatWeDo: 'We provide Apple enterprise solutions including Mac deployment, iOS device management, Apple Business Manager implementation, and mobile application development for iOS platforms. Our services cover device procurement, configuration, and enterprise mobility management.',
    partnerStory: 'Our Apple partnership developed when a creative agency needed to standardize on Apple technology for their design workflow. We deployed 200+ Mac workstations and implemented comprehensive iOS device management, enabling seamless collaboration and improving creative productivity by 45%.',
    logo: '/images/partners/apple-logo.svg',
    heroImage: 'https://picsum.photos/seed/apple/1920/1080',
    website: 'https://apple.com',
    category: 'hardware',
    specializations: ['Mac Deployment', 'iOS Management', 'Creative Workflows', 'Mobile Development', 'Enterprise Mobility']
  },
  {
    id: 'samsung',
    name: 'Samsung Electronics',
    description: 'Samsung Electronics Co., Ltd. is a South Korean multinational electronics corporation that produces a wide variety of consumer and industry electronics.',
    partnershipLevel: 'Authorized Partner',
    certifications: [
      'Samsung Enterprise Display Specialist',
      'Samsung Mobile Device Expert',
      'Samsung Memory Solutions Architect',
      'Samsung Knox Deployment Specialist'
    ],
    whatWeDo: 'We implement Samsung enterprise solutions including digital displays, mobile devices, memory solutions, and Knox security platform. Our expertise covers Samsung business displays, enterprise mobility, and memory infrastructure.',
    partnerStory: 'Our Samsung partnership was established through a digital signage project for a retail chain, where we deployed Samsung displays across 100+ locations. The implementation included content management, remote monitoring, and achieved 99.8% uptime, leading to expansion into mobile device management using Samsung Knox.',
    logo: '/images/partners/samsung-logo.svg',
    heroImage: 'https://picsum.photos/seed/samsung/1920/1080',
    website: 'https://samsung.com',
    category: 'hardware',
    specializations: ['Digital Displays', 'Enterprise Mobility', 'Memory Solutions', 'Security Platforms', 'Retail Technology']
  },
  {
    id: 'zebra',
    name: 'Zebra Technologies',
    description: 'Zebra Technologies Corporation is an American public company that manufactures and sells marking, tracking, and computer printing technologies.',
    partnershipLevel: 'Solution Partner',
    certifications: [
      'Zebra Certified Professional',
      'Mobile Computing Specialist',
      'Data Capture Solutions Expert',
      'Zebra Workforce Connect Expert'
    ],
    whatWeDo: 'We implement Zebra mobile computing and data capture solutions including barcode scanners, mobile computers, printers, and workforce management systems. Our services cover warehouse automation, inventory management, and mobile workforce solutions.',
    partnerStory: 'Our Zebra partnership began with a warehouse automation project that required rugged mobile computers and advanced data capture capabilities. We deployed Zebra devices that improved inventory accuracy by 99.5% and reduced processing time by 50%, establishing our expertise in Zebra enterprise mobility solutions.',
    logo: '/images/partners/zebra-logo.svg', // Placeholder
    heroImage: 'https://picsum.photos/seed/zebra/1920/1080',
    website: 'https://zebra.com',
    category: 'hardware',
    specializations: ['Mobile Computing', 'Data Capture', 'Warehouse Automation', 'Inventory Management', 'Workforce Solutions']
  },
  {
    id: 'schneider',
    name: 'Schneider Electric',
    description: 'Schneider Electric SE is a French multinational corporation that specializes in energy management and automation solutions.',
    partnershipLevel: 'Certified Partner',
    certifications: [
      'EcoStruxure Certified Professional',
      'Power Management Specialist',
      'Building Automation Expert',
      'Industrial Automation Specialist'
    ],
    whatWeDo: 'We implement Schneider Electric power management and automation solutions including UPS systems, power distribution, building automation, and industrial control systems. Our expertise covers energy efficiency, power protection, and smart building technologies.',
    partnerStory: 'Our Schneider partnership was formed through a critical power infrastructure upgrade for a data center that required 99.999% uptime. We implemented Schneider UPS systems and power distribution units that have maintained perfect reliability for over 5 years, preventing any power-related outages.',
    logo: '/images/partners/schneider-logo.svg',
    heroImage: 'https://picsum.photos/seed/schneider/1920/1080',
    website: 'https://schneider-electric.com',
    category: 'infrastructure',
    specializations: ['Power Management', 'UPS Systems', 'Building Automation', 'Energy Efficiency', 'Industrial Control']
  },
  {
    id: 'google',
    name: 'Google Cloud',
    description: 'Google Cloud Platform is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.',
    partnershipLevel: 'Google Cloud Partner',
    certifications: [
      'Google Cloud Professional Cloud Architect',
      'Google Cloud Professional Data Engineer',
      'Google Cloud Professional DevOps Engineer',
      'Google Workspace Administrator'
    ],
    whatWeDo: 'We implement Google Cloud solutions including cloud migration, application modernization, data analytics, and Google Workspace deployment. Our expertise covers GCP infrastructure, BigQuery, Kubernetes Engine, and AI/ML services.',
    partnerStory: 'Our Google Cloud partnership developed through a machine learning project that required processing massive datasets. We implemented a scalable solution using BigQuery and AI Platform that reduced processing time from days to hours, demonstrating our capability to leverage Google\'s advanced cloud technologies.',
    logo: '/images/partners/google-logo.svg',
    heroImage: 'https://picsum.photos/seed/google/1920/1080',
    website: 'https://cloud.google.com',
    category: 'infrastructure',
    specializations: ['Cloud Migration', 'Data Analytics', 'Machine Learning', 'Kubernetes', 'Workspace Solutions']
  },
  {
    id: 'neverfail',
    name: 'Neverfail',
    description: 'Neverfail provides high availability and disaster recovery solutions for mission-critical applications and data.',
    partnershipLevel: 'Certified Partner',
    certifications: [
      'Neverfail Certified Engineer',
      'High Availability Specialist',
      'Disaster Recovery Expert',
      'Business Continuity Professional'
    ],
    whatWeDo: 'We implement Neverfail high availability and disaster recovery solutions to ensure business continuity. Our services include failover clustering, data replication, and comprehensive disaster recovery planning for mission-critical systems.',
    partnerStory: 'Our Neverfail partnership was established when a financial services client required zero-downtime capabilities for their trading systems. We implemented Neverfail clustering that has maintained 100% uptime during multiple hardware failures, saving millions in potential trading losses.',
    logo: '/images/partners/neverfail-logo.svg',
    heroImage: 'https://picsum.photos/seed/neverfail/1920/1080',
    website: 'https://neverfail.com',
    category: 'infrastructure',
    specializations: ['High Availability', 'Disaster Recovery', 'Business Continuity', 'Failover Clustering', 'Data Replication']
  },
  {
    id: 'apc',
    name: 'APC by Schneider Electric',
    description: 'APC by Schneider Electric provides uninterruptible power supplies (UPS), surge protectors, power distribution units (PDUs), and other power protection products.',
    partnershipLevel: 'Authorized Partner',
    certifications: [
      'APC Certified Professional',
      'UPS Systems Specialist',
      'Power Protection Expert',
      'Data Center Infrastructure Specialist'
    ],
    whatWeDo: 'We design and implement APC power protection solutions including UPS systems, power distribution, cooling systems, and data center infrastructure. Our services cover power analysis, system design, installation, and maintenance.',
    partnerStory: 'Our APC partnership was built through power infrastructure projects for mission-critical facilities. We\'ve designed and installed APC solutions that protect over $100M in IT equipment, maintaining 99.99% power availability across all installations.',
    logo: '/images/partners/apc-logo.svg',
    heroImage: 'https://picsum.photos/seed/apc/1920/1080',
    website: 'https://apc.com',
    category: 'infrastructure',
    specializations: ['UPS Systems', 'Power Distribution', 'Data Center Infrastructure', 'Cooling Solutions', 'Power Protection']
  },
  {
    id: 'd-link',
    name: 'D-Link Corporation',
    description: 'D-Link Corporation is a Taiwanese multinational networking equipment manufacturing corporation that designs and manufactures networking and connectivity products.',
    partnershipLevel: 'Solution Partner',
    certifications: [
      'D-Link Certified Professional',
      'Network Infrastructure Specialist',
      'Wireless Solutions Expert',
      'Network Security Professional'
    ],
    whatWeDo: 'We implement D-Link networking solutions including switches, wireless access points, routers, and network management systems. Our expertise covers small to medium business networking, wireless infrastructure, and network security.',
    partnerStory: 'Our D-Link partnership developed through cost-effective networking solutions for growing businesses. We\'ve deployed D-Link infrastructure for over 50 SMB clients, providing enterprise-grade networking capabilities at budget-friendly prices while maintaining high performance and reliability.',
    logo: '/images/partners/d-link-logo.svg',
    heroImage: 'https://picsum.photos/seed/d-link/1920/1080',
    website: 'https://dlink.com',
    category: 'infrastructure',
    specializations: ['SMB Networking', 'Wireless Infrastructure', 'Network Switches', 'Security Appliances', 'Network Management']
  },
  {
    id: 'netapp',
    name: 'NetApp',
    description: 'NetApp, Inc. is an American hybrid cloud data services and data management company that provides unified data storage and integrated data services.',
    partnershipLevel: 'Gold Partner',
    certifications: [
      'NetApp Certified Data Administrator',
      'NetApp Certified Implementation Engineer',
      'NetApp Cloud Professional',
      'NetApp Storage Solutions Architect'
    ],
    whatWeDo: 'We implement NetApp storage and data management solutions including ONTAP storage systems, cloud data services, and hybrid cloud infrastructure. Our expertise covers data protection, storage optimization, and cloud integration.',
    partnerStory: 'Our NetApp partnership was forged through a complex data center consolidation that required seamless data migration with zero downtime. We successfully migrated 500TB of data using NetApp technologies while improving performance by 40% and reducing storage costs by 35%.',
    logo: '/images/partners/netapp-logo.svg',
    heroImage: 'https://picsum.photos/seed/netapp/1920/1080',
    website: 'https://netapp.com',
    category: 'infrastructure',
    specializations: ['Data Storage', 'Cloud Integration', 'Data Protection', 'Storage Optimization', 'Hybrid Cloud']
  },
  {
    id: 'starlink',
    name: 'Starlink',
    description: 'Starlink is a satellite internet constellation operated by SpaceX providing satellite Internet access to remote and underserved areas.',
    partnershipLevel: 'Authorized Partner',
    certifications: [
      'Starlink Certified Installer',
      'Satellite Communications Specialist',
      'Remote Connectivity Expert',
      'Network Integration Professional'
    ],
    whatWeDo: 'We implement Starlink satellite internet solutions for remote locations, disaster recovery sites, and areas with limited connectivity options. Our services include site surveys, installation, network integration, and ongoing support.',
    partnerStory: 'Our Starlink partnership began with emergency connectivity for disaster recovery sites where traditional internet was unavailable. We successfully deployed Starlink terminals that provided reliable high-speed internet during critical operations, establishing our expertise in satellite communications.',
    logo: '/images/partners/starlink-logo.svg',
    heroImage: 'https://picsum.photos/seed/starlink/1920/1080',
    website: 'https://starlink.com',
    category: 'enterprise',
    specializations: ['Satellite Internet', 'Remote Connectivity', 'Disaster Recovery', 'Emergency Communications', 'Network Redundancy']
  },
  {
    id: 'oracle',
    name: 'Oracle Corporation',
    description: 'Oracle Corporation is an American multinational computer technology corporation that offers database software and technology, cloud engineered systems, and enterprise software products.',
    partnershipLevel: 'Gold Partner',
    certifications: [
      'Oracle Certified Professional',
      'Oracle Database Administrator Certified Professional',
      'Oracle Cloud Infrastructure Architect Professional',
      'Oracle Applications Specialist'
    ],
    whatWeDo: 'We implement Oracle database solutions, enterprise applications, and cloud infrastructure. Our expertise covers Oracle Database, ERP systems, cloud migration, and enterprise application integration.',
    partnerStory: 'Our Oracle partnership was established through a complex ERP implementation for a manufacturing company. We successfully migrated their entire business operations to Oracle Cloud applications, improving efficiency by 50% and reducing operational costs significantly.',
    logo: '/images/partners/oracle-logo.svg',
    heroImage: 'https://picsum.photos/seed/oracle/1920/1080',
    website: 'https://oracle.com',
    category: 'enterprise',
    specializations: ['Database Management', 'Enterprise Applications', 'Cloud Infrastructure', 'ERP Systems', 'Business Intelligence']
  },
  {
    id: 'emc',
    name: 'Dell EMC',
    description: 'Dell EMC is a subsidiary of Dell Technologies that provides data storage, information security, virtualization, analytics, cloud computing and other products and services.',
    partnershipLevel: 'Proven Professional',
    certifications: [
      'Dell EMC Proven Professional',
      'Unity Storage Specialist',
      'VMAX Storage Expert',
      'Data Protection Specialist'
    ],
    whatWeDo: 'We implement Dell EMC storage solutions including enterprise storage arrays, backup systems, and data protection solutions. Our expertise covers storage architecture, data migration, and comprehensive backup strategies.',
    partnerStory: 'Our Dell EMC partnership was built through high-performance storage implementations for data-intensive applications. We\'ve deployed petabyte-scale storage solutions that support critical business operations with 99.999% availability.',
    logo: '/images/partners/emc-logo.svg',
    heroImage: 'https://picsum.photos/seed/emc/1920/1080',
    website: 'https://dellemc.com',
    category: 'enterprise',
    specializations: ['Enterprise Storage', 'Data Protection', 'Storage Virtualization', 'Backup Solutions', 'High Availability']
  },
  {
    id: 'lenovo',
    name: 'Lenovo',
    description: 'Lenovo Group Limited is a Chinese multinational technology company that designs, develops, manufactures, and sells personal computers, tablet computers, smartphones, workstations, servers, electronic storage devices, IT management software, and smart televisions.',
    partnershipLevel: 'Business Partner',
    certifications: [
      'Lenovo Certified Professional',
      'ThinkSystem Server Specialist',
      'ThinkPad Deployment Expert',
      'Data Center Solutions Architect'
    ],
    whatWeDo: 'We provide Lenovo computing solutions including laptops, desktops, servers, and workstations. Our services cover device procurement, deployment, configuration, and enterprise mobility management.',
    partnerStory: 'Our Lenovo partnership developed through large-scale laptop deployments for remote workforce enablement. We successfully deployed over 2,000 ThinkPad devices with comprehensive device management, enabling seamless remote work capabilities.',
    logo: '/images/partners/lenovo-logo.svg',
    heroImage: 'https://picsum.photos/seed/lenovo/1920/1080',
    website: 'https://lenovo.com',
    category: 'enterprise',
    specializations: ['Business Computing', 'Server Infrastructure', 'Mobile Workstations', 'Enterprise Deployment', 'Device Management']
  },
  {
    id: 'asus',
    name: 'ASUS',
    description: 'ASUSTeK Computer Inc. is a Taiwanese multinational computer and phone hardware and electronics company that produces computers, phones, motherboards, monitors, routers and other electronic products.',
    partnershipLevel: 'Authorized Partner',
    certifications: [
      'ASUS Certified Professional',
      'Commercial Solutions Expert',
      'Network Equipment Specialist',
      'Gaming Solutions Architect'
    ],
    whatWeDo: 'We implement ASUS commercial computing and networking solutions including business laptops, desktop computers, servers, and networking equipment. Our expertise covers commercial deployments and specialized computing requirements.',
    partnerStory: 'Our ASUS partnership was formed through specialized computing needs for engineering and design workstations. We deployed high-performance ASUS systems that enabled complex CAD work and 3D rendering with exceptional performance and reliability.',
    logo: '/images/partners/asus-logo.svg',
    heroImage: 'https://picsum.photos/seed/asus/1920/1080',
    website: 'https://asus.com',
    category: 'enterprise',
    specializations: ['Workstations', 'Business Computing', 'Network Equipment', 'Specialized Hardware', 'Performance Computing']
  },
  {
    id: 'logitech',
    name: 'Logitech',
    description: 'Logitech International S.A. is a Swiss multinational manufacturer of computer peripherals and software, with headquarters in Lausanne, Switzerland.',
    partnershipLevel: 'Solution Partner',
    certifications: [
      'Logitech Certified Professional',
      'Video Conferencing Specialist',
      'Collaboration Solutions Expert',
      'Unified Communications Professional'
    ],
    whatWeDo: 'We implement Logitech collaboration and peripheral solutions including video conferencing systems, headsets, keyboards, mice, and presentation tools. Our expertise covers modern workplace technology and unified communications.',
    partnerStory: 'Our Logitech partnership was established through comprehensive video conferencing deployments that transformed meeting experiences. We implemented Logitech Rally and MeetUp systems across multiple conference rooms, improving collaboration quality and user satisfaction by 85%.',
    logo: '/images/partners/logitech-logo.svg',
    heroImage: 'https://picsum.photos/seed/logitech/1920/1080',
    website: 'https://logitech.com',
    category: 'enterprise',
    specializations: ['Video Conferencing', 'Collaboration Tools', 'Peripherals', 'Unified Communications', 'Modern Workplace']
  },
  {
    id: 'kaspersky',
    name: 'Kaspersky',
    description: 'Kaspersky Lab is a multinational cybersecurity and anti-virus provider that develops and sells antivirus, internet security, password management, endpoint security, and other cybersecurity products and services.',
    partnershipLevel: 'Certified Partner',
    certifications: [
      'Kaspersky Certified Specialist',
      'Endpoint Security Expert',
      'Threat Management Professional',
      'Security Solutions Architect'
    ],
    whatWeDo: 'We implement Kaspersky security solutions including endpoint protection, threat management, and comprehensive cybersecurity frameworks. Our expertise covers security architecture, threat detection, and incident response.',
    partnerStory: 'Our Kaspersky partnership was forged through a critical security incident response where we deployed Kaspersky solutions to contain and eliminate advanced threats. The implementation prevented significant data breaches and established our reputation as a trusted security implementer.',
    logo: '/images/partners/kaspersky-logo.svg',
    heroImage: 'https://picsum.photos/seed/kaspersky/1920/1080',
    website: 'https://kaspersky.com',
    category: 'security',
    specializations: ['Endpoint Security', 'Threat Detection', 'Incident Response', 'Security Management', 'Cybersecurity Frameworks']
  },
  {
    id: 'nokia',
    name: 'Nokia',
    description: 'Nokia Corporation is a Finnish multinational telecommunications, information technology, and consumer electronics corporation, established in 1865.',
    partnershipLevel: 'Technology Partner',
    certifications: [
      'Nokia Certified Professional',
      'Telecommunications Specialist',
      'Network Security Expert',
      '5G Solutions Architect'
    ],
    whatWeDo: 'We implement Nokia telecommunications and networking solutions including mobile networks, security appliances, and 5G infrastructure. Our expertise covers telecommunications infrastructure and enterprise networking.',
    partnerStory: 'Our Nokia partnership developed through telecommunications infrastructure projects requiring robust security and high-performance networking. We successfully deployed Nokia security solutions that protect critical network infrastructure for telecommunications providers.',
    logo: '/images/partners/nokia-logo.svg',
    heroImage: 'https://picsum.photos/seed/nokia/1920/1080',
    website: 'https://nokia.com',
    category: 'security',
    specializations: ['Telecommunications', 'Network Security', '5G Infrastructure', 'Mobile Networks', 'Enterprise Networking']
  }
];

export const getPartnershipById = (id: string): Partnership | undefined => {
  return partnerships.find(partnership => partnership.id === id);
};

export const getPartnershipsByCategory = (category: Partnership['category']): Partnership[] => {
  return partnerships.filter(partnership => partnership.category === category);
};

export const getAllPartnershipCategories = (): Partnership['category'][] => {
  return ['technology', 'hardware', 'infrastructure', 'enterprise', 'security'];
};