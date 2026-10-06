// ============================================================
//  TEAM DATA
//  Shown on the Team page (team.html). Two blocks:
//    piData      – the Principal Investigator card
//    teamMembers – everyone else, shown as a grid of cards
//
//  piData fields:
//    name, title, photo, blurb, email, twitter, astar
//    title can use <br> for a line break; blurb is wrapped in
//    backticks and can contain HTML links; astar is the A*STAR
//    profile URL. email, twitter and astar are optional (the
//    matching link is hidden if left out).
//
//  To add a team member: copy one entry block into the right
//  group of teamMembers, in alphabetical order by first name.
//  Fields:
//    name   – full name (string)
//    title  – use the existing titles exactly, e.g.
//             "Postdoctoral Fellow", "Senior Research Officer",
//             "Research Officer", "Graduate Student",
//             "Programme Manager" (string)
//    photo  – e.g. "images/team/firstname_lastname.jpg"
//             (lowercase, underscores, under 500 KB; a placeholder
//             is shown if left out)
//    github – GitHub profile URL (string, optional)
//    badge  – { label: "...", href: "..." } (optional; if both
//             badge and github are given, only the badge is shown)
//
//  Groups: Postdoctoral Fellows (and the Programme Manager), then
//  Senior Research Officers, Research Officers and Graduate Students.
// ============================================================

/* PI */
const piData = {
  name: "Shyam Prabhakar",
  title: "Associate Director, Spatial and Single Cell Systems<br>Senior Group Leader, Laboratory of Systems Biology and Data Analytics",
  photo: "images/team/shyam_prabhakar.jpg",
  blurb: `Shyam Prabhakar obtained a B.Tech in Electronics Engineering from IIT Madras and a PhD in Applied Physics from Stanford University. He received the 2001 American Physical Society PhD thesis award for Beam Physics. Following postdoctoral fellowships in Mathematics at Stanford and Genomics at the Lawrence Berkeley National Laboratory, he joined the Genome Institute of Singapore (GIS). He heads the Singapore Single Cell Network and the GIS Spatial and Single Cell Genomics Platform (S2GP). He co-leads: the Genetic Diversity Network within the international <a href="https://www.humancellatlas.org/" target="_blank" rel="noopener noreferrer">Human Cell Atlas</a> (HCA), HCA Asia, the Asian Epigenome Network, and A*STAR's AI and Analytics (AI3) Horizontal Programme.`, email: "prabhakars@a-star.edu.sg",
  twitter: "https://twitter.com/ShyamPrabhakar",
  astar: "https://www.a-star.edu.sg/gis/our-people/faculty-staff/members/shyam-prabhakar",
};

/* TEAM */
const teamMembers = [
  /* Postdoctoral Fellows */
  {
    name: "Ignasius Joanito",
    title: "Postdoctoral Fellow",
    photo: "images/team/ignasius_joanito.jpg",
  },
  {
    name: "Jagadish Sankaran",
    title: "Postdoctoral Fellow",
    photo: "images/team/jagadish_sankaran.jpg",
  },
  {
    name: "Kian Hong Kock",
    title: "Postdoctoral Fellow",
    photo: "images/team/kian_hong_kock.jpg",
  },
  {
    name: "Merve Kahraman",
    title: "Postdoctoral Fellow",
    photo: "images/team/merve_kahraman.jpg",
  },
  {
    name: "Shvetha Sankaran",
    title: "Programme Manager",
    photo: "images/team/shvetha_sankaran.jpg",
  },
  {
    name: "Vairavan Lakshmanan",
    title: "Postdoctoral Fellow",
    photo: "images/team/vairavan_lakshmanan.jpg",
    github: "https://github.com/VairavanLakshmanan",
  },

  /* Senior Research Officers, Research Officers, and Graduate Students */
  {
    name: "Arthur Zhang",
    title: "Senior Research Officer",
    photo: "images/team/arthur_zhang.jpg",
  },
  {
    name: "Giovani Wijaya",
    title: "Senior Research Officer",
    photo: "images/team/giovani_wijaya.jpg",
  },
  {
    name: "Jiamin Toh",
    title: "Research Officer",
    photo: "images/team/jiamin_toh.jpg",
  },
  {
    name: "Kuai Yu",
    title: "Graduate Student",
    photo: "images/team/kuai_yu.jpg",
    github: "https://github.com/yu-kuai",
  },
  {
    name: "Le Min Tan",
    title: "Senior Research Officer",
    photo: "images/team/le_min_tan.jpg",
  },
  {
    name: "Michelle Lim",
    title: "Senior Research Officer",
    photo: "images/team/michelle_lim.jpg",
  },
  {
    name: "Naman Dwivedi",
    title: "Senior Research Officer",
    photo: "images/team/naman_dwivedi.jpeg",
  },
  {
    name: "Prasanna Nori Venkatesh",
    title: "Senior Research Officer",
    photo: "images/team/prasanna_nori_venkatesh.jpg",
  },
  {
    name: "Sudhagar Samydurai",
    title: "Senior Research Officer",
    photo: "images/team/sudhagar_samydurai.jpeg",
    badge: { label: "S2GP Manager", href: "https://www.a-star.edu.sg/gis/our-science/spatial-and-single-cell-systems/spatial-and-single-cell-genomics-platform" },
  },
  {
    name: "Yong Shan Lim",
    title: "Research Officer",
    photo: "images/team/yong_shan_lim.jpg",
    github: "https://github.com/ys-lim",
  },
  {
    name: "Yurike Laurensia",
    title: "Senior Research Officer",
    photo: "images/team/yurike_laurensia.jpg",
  },
];
