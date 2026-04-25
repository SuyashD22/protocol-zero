import { notFound } from "next/navigation";
import { Metadata } from "next";
import EventDetailClient from "./EventDetailClient";

const events: Record<string, EventData> = {
  "system-design-masterclass": {
    id: "system-design-masterclass",
    title: "System Design Masterclass",
    date: "Oct 15, 2026",
    time: "18:00 – 20:00",
    location: "Main Auditorium",
    type: "Workshop",
    status: "Ongoing",
    color: "#EC3750",
    tagline: "Think big. Design bigger.",
    description:
      "A deep-dive workshop where senior engineers walk you through designing Netflix-scale systems from scratch — load balancers, CDNs, databases, and everything in between.",
    rules: [
      "Registration is mandatory before attending.",
      "Participants must bring their own laptop.",
      "Be present at least 10 minutes before the session starts.",
      "Q&A will be held in the last 30 minutes — save your questions.",
      "Recording is not permitted without prior consent.",
    ],
    registrationLink: "https://forms.gle/placeholder-system-design",
    prizeOrPerk: "Certificate of participation + System Design cheat sheet PDF",
  },
  "zero-to-web3-hackathon": {
    id: "zero-to-web3-hackathon",
    title: "Zero to Web3 Hackathon",
    date: "Oct 20–22, 2026",
    time: "48 Hours",
    location: "Innovation Lab",
    type: "Hackathon",
    status: "Ongoing",
    color: "#338EDA",
    tagline: "Build the decentralized future.",
    description:
      "A 48-hour hackathon where teams of 2–4 build decentralized applications on any blockchain of their choice. ₹5,00,000 in prizes. No prior Web3 experience needed.",
    rules: [
      "Teams must be 2–4 members. Solo registrations are not accepted.",
      "All code must be written during the hackathon. Pre-built templates are allowed.",
      "Projects must be open-sourced on GitHub at submission.",
      "Plagiarism or IP violations will result in immediate disqualification.",
      "Judging criteria: Innovation (40%), Technical complexity (30%), UI/UX (20%), Pitch (10%).",
      "Final submissions are due by 6:00 PM on Oct 22.",
    ],
    registrationLink: "https://forms.gle/placeholder-web3-hackathon",
    prizeOrPerk: "₹5,00,000 prize pool split across Top 3 teams + internship referrals",
  },
  "resume-roast": {
    id: "resume-roast",
    title: "Resume Roast & Review",
    date: "Nov 5, 2026",
    time: "16:00 – 18:00",
    location: "Seminar Hall B",
    type: "Career",
    status: "Upcoming",
    color: "#6B21A8",
    tagline: "Brutal honesty. Better placement odds.",
    description:
      "Submit your resume beforehand and get a 1-on-1 breakdown from our alumni panel working at top MNCs and startups. Every line will be reviewed.",
    rules: [
      "Submit your resume PDF at least 24 hours before the event via the registration form.",
      "Slots are limited — first-come, first-served.",
      "Each slot is 15 minutes. Be prepared with specific questions.",
      "No ATS-unfriendly formats — plain PDF only.",
    ],
    registrationLink: "https://forms.gle/placeholder-resume-roast",
    prizeOrPerk: "Personalized resume feedback report + alumni LinkedIn connections",
  },
  "cp-blitz": {
    id: "cp-blitz",
    title: "CP Blitz — Speed Round",
    date: "Nov 12, 2026",
    time: "14:00 – 17:00",
    location: "Computer Lab 3",
    type: "Contest",
    status: "Upcoming",
    color: "#0D9488",
    tagline: "10 problems. 3 hours. No mercy.",
    description:
      "A fast-paced competitive programming contest designed to simulate real placement rounds. Problems range from easy arrays to hard graph theory.",
    rules: [
      "Allowed languages: C++, Java, Python.",
      "No internet access during the contest. All problem statements are provided offline.",
      "Plagiarism detection is active — identical solutions will both be disqualified.",
      "Ranking is by number of problems solved, then by total penalty time.",
      "Participants must register individually — no teams.",
    ],
    registrationLink: "https://forms.gle/placeholder-cp-blitz",
    prizeOrPerk: "Top 3 winners featured on Protocol Zero leaderboard + goodies",
  },
  "os-deep-dive": {
    id: "os-deep-dive",
    title: "OS & Low-Level Deep Dive",
    date: "Nov 20, 2026",
    time: "17:00 – 19:00",
    location: "Online (Zoom)",
    type: "Workshop",
    status: "Upcoming",
    color: "#D97706",
    tagline: "The stuff they don't teach in class.",
    description:
      "An online masterclass on Operating System internals — process scheduling, memory management, deadlocks, and why interviewers at Google love these topics.",
    rules: [
      "Zoom link will be shared 1 hour before the session to registered participants.",
      "Keep your microphone muted unless speaking.",
      "Live coding demos will be shared — participants are encouraged to follow along.",
      "Session recording will be shared with registered attendees only.",
    ],
    registrationLink: "https://forms.gle/placeholder-os-deepdive",
    prizeOrPerk: "Session recording + curated OS interview question bank",
  },
  "mock-interview-faang": {
    id: "mock-interview-faang",
    title: "Mock Interview Series: FAANG",
    date: "Sep 28, 2026",
    time: "14:00 – 18:00",
    location: "Online",
    type: "Career",
    status: "Past",
    color: "#374151",
    tagline: "Practice like it's the real thing.",
    description:
      "A completed 1-on-1 mock technical interview session covering dynamic programming, graphs, and behavioral rounds. Slots were fully booked.",
    rules: [
      "This event has concluded.",
      "Resources and feedback forms have been sent to all participants.",
      "Stay tuned for the next edition!",
    ],
    registrationLink: "",
    prizeOrPerk: "Event completed — next edition coming soon.",
  },
};

export type EventData = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  status: string;
  color: string;
  tagline: string;
  description: string;
  rules: string[];
  registrationLink: string;
  prizeOrPerk: string;
};

export async function generateStaticParams() {
  return Object.keys(events).map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const event = events[id];
  if (!event) return {};
  return { title: `${event.title} | Protocol Zero` };
}

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events[id];
  if (!event) notFound();
  return <EventDetailClient event={event} />;
}
