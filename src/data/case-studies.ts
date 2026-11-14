import { projects } from "@/data/portfolio";

const caseStudyEntries = [
  {
    caseStudyIndex: "01",
    slug: "oction-mart",
    projectId: "oction",
    challenge:
      "Keep auction activity, role-based access, and transaction records coordinated while many bidders participate at once.",
    approach: [
      "Built role-aware bidding and transaction flows for buyers and sellers.",
      "Connected a Next.js interface to Django REST APIs backed by PostgreSQL.",
      "Used real-time streams to keep bid activity moving between participants.",
      "Checked JWT APIs against 500+ records and tested real-time bidding with 80+ mock users.",
    ],
    highlights: ["80+ mock users", "100+ concurrent bids tested", "500+ API records checked"],
  },
  {
    caseStudyIndex: "02",
    slug: "parkai",
    projectId: "parkai",
    challenge:
      "Make available parking easier to discover and share, while connecting bookings with reliable vehicle access.",
    approach: [
      "Combined parking-slot booking and sharing in a mobile application.",
      "Used YOLO-based computer vision to recognize vehicles and available bays.",
      "Connected the app to Django REST services and PostgreSQL.",
      "Used QR flows for entry and exit, with more than 300 payment trials.",
    ],
    highlights: ["Vehicle and bay detection", "QR entry and exit", "300+ payment trials"],
  },
  {
    caseStudyIndex: "03",
    slug: "cmpsp-public-grievance-portal",
    projectId: "chief-minister-public-service-portal",
    displayTitle: "CMPSP Public Grievance Portal",
    challenge:
      "Give citizens a clear way to submit public-service grievances, follow their progress, and get concerns to the right workflow.",
    approach: [
      "Created a public-facing portal for submitting grievances to the Chief Minister's office.",
      "Designed a tracking flow so citizens can follow submitted concerns.",
      "Structured submissions to support routing into the appropriate service workflow.",
      "Built with Next.js and Supabase.",
    ],
    highlights: ["Public grievance intake", "Submission tracking", "Service workflow routing"],
  },
] as const;

export const caseStudies = caseStudyEntries.flatMap((entry) => {
  const project = projects.find(({ id }) => id === entry.projectId);
  return project
    ? [
        {
          ...entry,
          project: {
            ...project,
            title: "displayTitle" in entry ? entry.displayTitle : project.title,
          },
        },
      ]
    : [];
});

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
