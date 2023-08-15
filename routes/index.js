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
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { glossary: devOpsGlossary });
});

module.exports = router;
