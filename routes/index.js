var express = require('express');
var router = express.Router();

const devOpsGlossary = [
  {
    term: "DevOps",
    definition: "DevOps is a set of practices that combine software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery with high software quality.",
    references: [
      "Chen, L. (2015). Continuous Delivery: Huge Benefits, but Challenges Too. IEEE Software, 32(2), 50–54",
    ]
  },
  {
    term: "Continuous Integration (CI)",
    definition: "Continuous Integration is the practice of frequently integrating code changes from multiple contributors into a shared repository. Automated build and testing processes are used to ensure that changes do not introduce errors.",
    references: [
      "Beck, K. (1999). Embracing change with extreme programming. Computer, 32(10), 70–77"
    ]
  },
  {
    term: "Continuous Delivery (CD)",
    definition: "Continuous Delivery is an extension of CI where code changes are automatically prepared for deployment to production or staging environments after passing automated testing. This enables frequent and reliable releases.",
    references: [
      "Chen, L. (2015). Continuous Delivery: Huge Benefits, but Challenges Too. IEEE Software, 32(2), 50–54",
    ]
  },
  {
    term: "Infrastructure as Code (IaC)",
    definition: "Infrastructure as Code is the practice of managing and provisioning infrastructure using code and automation. It allows infrastructure to be versioned, tested, and deployed like software code.",
    references: [
      "Wittig, M., & Wittig, A. (2016). Amazon Web Services in action. Manning",
    ]
  },
  {
    term: "Microservices",
    definition: "Microservices is an architectural approach where applications are composed of small, independent services that communicate over well-defined APIs. This enables flexibility, scalability, and easier maintenance.",
    references: [
      "Pautasso, C., Zimmermann, O., Amundsen, M., Lewis, J., & Josuttis, N. (2017). Microservices in Practice, Part 1: Reality Check and Service Design. IEEE Software, 34(1), 91–98"
    ]
  },
  {
    term: "Containerization",
    definition: "Containerization is a technology that packages an application and its dependencies, libraries, and runtime environment together into a single container. It ensures consistency across different environments.",
    references: [
      "Rubens, P. (2017, June 27). What are containers and why do you need them?"
    ]
  },
  {
    term: "Orchestration",
    definition: "Orchestration refers to the automated arrangement, coordination, and management of various tasks and services in a distributed system. It is often used in managing containerized applications.",
    references: [
      "Menychtas, A., Gatzioura, A., & Varvarigou, T. (2011). A Business Resolution Engine for Cloud Marketplaces. IEEE International Conference on Cloud Computing Technology and Science"
    ]
  },
  {
    term: "Version Control System (VCS)",
    definition: "A Version Control System is a tool that helps track changes to files and directories over time. It allows multiple people to collaborate on a project, manage changes, and maintain a history of revisions.",
    references: [
      "Lionetti, G. (2012, February 14). What is version control: centralized vs. DVCS. Work Life by Atlassian"
    ]
  },
  {
    term: "Deployment Pipeline",
    definition: "A Deployment Pipeline is an automated process that facilitates the building, testing, and deployment of code changes. It ensures a consistent and repeatable way to release software.",
    references: [
      "Chen, L. (2015). Continuous Delivery: Huge Benefits, but Challenges Too. IEEE Software, 32(2), 50–54",
    ]
  },
  {
    term: "Monitoring and Observability",
    definition: "Monitoring involves tracking the health and performance of a system, while Observability goes beyond monitoring to provide insights into the internal state of the system, often through logs, metrics, and traces.",
    references: [
      "Majors, C., Fong-Jones, L., & Miranda, G. (2022). Observability Engineering. “O’Reilly Media, Inc"
    ]
  },
  {
    term: "Infrastructure Automation",
    definition: "Infrastructure Automation involves using scripts and tools to automate the provisioning and management of infrastructure components, reducing manual tasks and improving consistency.",
    references: ["Georgakopoulos, D., Hornick, M., & Sheth, A. (1995). An overview of workflow management: From process modeling to workflow automation infrastructure. Distributed and Parallel Databases, 3(2), 119–153."]
  },
  {
    term: "Scalability",
    definition: "Scalability is the ability of a system to handle increased workloads by adding resources or adjusting its capacity, ensuring performance remains consistent.",
    references: ["Jogalekar, P., & Woodside, M. (2000). Evaluating the scalability of distributed systems. IEEE Transactions on Parallel and Distributed Systems, 11(6), 589–603."]
  },
  {
    term: "Kubernetes",
    definition: "Kubernetes is an open-source container orchestration platform for automating the deployment, scaling, and management of containerized applications.",
    references: ["Yegulalp, S. (2019, April 3). What is Kubernetes? Your next application platform. InfoWorld."]
  },
  {
    term: "Deployment Automation",
    definition: "Deployment Automation involves automating the process of deploying software updates to different environments, reducing manual errors and speeding up releases.",
    references: ["Humble, J., & Farley, D. (2010). Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation. In Google Books. Pearson Education."]
  },
  {
    term: "Load Balancing",
    definition: "Load Balancing is the distribution of network traffic across multiple servers or resources to ensure optimal utilization and reliability, improving application performance.",
    references: ["Bourke, T. (2001). Server Load Balancing. In Google Books. “O’Reilly Media, Inc.”"]
  },
  {
    term: "Agile Development",
    definition: "Agile Development is an iterative and collaborative software development approach that emphasizes flexibility, customer feedback, and delivering value in small increments.",
    references: ["Abeythilake, U. (2022, June 12). Agile Methodology. Medium."]
  },
  {
    term: "Immutable Infrastructure",
    definition: "Immutable Infrastructure is a concept where infrastructure components, once deployed, are never modified. Instead, new components are created to replace the old ones, enhancing reliability and consistency.",
    references: ["Virdó, H. (2017, September 26). What Is Immutable Infrastructure? | DigitalOcean."]
  },
  {
    term: "Service Level Agreement (SLA)",
    definition: "A Service Level Agreement is a formal agreement between a service provider and a customer that outlines the expected level of service, including availability, response times, and support.",
    references: ["Manjaly, S. (2022, July 22). The Ultimate Guide to Service Level Agreements (SLAs). Blog.invgate.com."]
  },
  {
    term: "Kernel",
    definition: "The Kernel is the core component of an operating system that manages system resources, including hardware and software interactions. In DevOps, understanding the Kernel can be important for optimizing performance and resource management in infrastructure.",
    references: ["Horcasitas, J. (2021, July 31). What Is a Kernel? | DigitalOcean."]
  },
  {
    term: "Incident Management",
    definition: "Incident Management is the process of identifying, responding to, and resolving incidents in a production environment to minimize downtime and impact on users.",
    references: ["Prinsloo, H. (2019, August 6). Incident Management Process. Medium."]
  },
  {
    term: "Agile Release Management",
    definition: "Agile Release Management is a practice that focuses on coordinating and managing software releases within an Agile development environment to ensure a smooth and efficient delivery process.",
    references: ["Putta, A., Paasivaara, M., & Lassenius, C. (2019). How Are Agile Release Trains Formed in Practice? A Case Study in a Large Financial Corporation. Lecture Notes in Business Information Processing, 154–170"]
  },
  {
    term: "Configuration Management",
    definition: "Configuration Management involves tracking and controlling changes to software and infrastructure configurations to maintain consistency and stability throughout the development and deployment lifecycle.",
    references: ["Dart, S. (1991). Concepts in configuration management systems. Proceedings of the 3rd International Workshop on Software Configuration Management"]
  },
  {
    term: "Chaos Engineering",
    definition: "Chaos Engineering is the practice of intentionally introducing controlled failures and chaos into a system to proactively identify weaknesses and vulnerabilities, helping to build more resilient systems.",
    references: ["Basiri, A., Behnam, N., de Rooij, R., Hochstein, L., Kosewski, L., Reynolds, J., & Rosenthal, C. (2016). Chaos Engineering. IEEE Software, 33(3), 35–41"]
  },
  {
    term: "GitOps",
    definition: "GitOps is a methodology that uses Git repositories as the source of truth for infrastructure and application deployment, enabling declarative and version-controlled infrastructure management.",
    references: ["Beetz, F., & Harrer, S. (2021). GitOps: The Evolution of DevOps? IEEE Software."]
  },
  {
    term: "Feature Toggles (Feature Flags)",
    definition: "Feature Toggles, also known as Feature Flags, allow developers to control the enablement or disablement of specific features in an application through configuration rather than code changes, facilitating continuous delivery and A/B testing.",
    references: ["Mahdavi-Hezaveh, R., Ajmeri, N., & Williams, L. (2022). Feature toggles as code: Heuristics and metrics for structuring feature toggles. Information and Software Technology, 145, 106813."]
  },
  {
    term: "Log Aggregation",
    definition: "Log Aggregation is the process of collecting and centralizing logs from various sources, making it easier to analyze and troubleshoot issues in distributed systems.",
    references: ["Ahmed Khan, M. N., & Ullah, S. (2017). A log aggregation forensic analysis framework for cloud computing environments. Computer Fraud & Security, 2017(7), 11–16."]
  },
  {
    term: "Serverless Computing",
    definition: "Serverless Computing is a cloud computing model where the cloud provider manages the underlying infrastructure, allowing developers to focus solely on writing code and deploying functions, often used for microservices.",
    references: ["McGrath, G., & Brenner, P. R. (2017). Serverless Computing: Design, Implementation, and Performance. 2017 IEEE 37th International Conference on Distributed Computing Systems Workshops (ICDCSW)."]
  },
  {
    term: "Compliance as Code",
    definition: "Compliance as Code involves using code and automation to ensure that software and infrastructure configurations adhere to regulatory and security compliance standards.",
    references: ["Ismail, A. S., Ali, K. N., & Iahad, N. A. (2017, July 1). A Review on BIM-based automated code compliance checking system. IEEE Xplore"]
  },
  {
    term: "Service Mesh",
    definition: "A Service Mesh is a dedicated infrastructure layer for handling service-to-service communication within microservices-based applications, providing features like load balancing, security, and observability.",
    references: ["Li, W., Lemieux, Y., Gao, J., Zhao, Z., & Han, Y. (2019, April 1). Service Mesh: Challenges, State of the Art, and Future Research Opportunities. IEEE Xplore."]
  },
  {
    term: "DevSecOps",
    definition: "DevSecOps is an extension of DevOps that integrates security practices and tools into the software development and delivery process to identify and mitigate security vulnerabilities early in the development lifecycle.",
    references: ["Myrbakken, H., & Colomo-Palacios, R. (2017). DevSecOps: A Multivocal Literature Review. Communications in Computer and Information Science, 17–29"]
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { glossary: devOpsGlossary });
});

module.exports = router;
