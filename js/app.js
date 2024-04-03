const projects = [
  {
    title: "AkademNashr",
    githubLink: "https://github.com/Nazarovfarhod/akademnashir",
    vercelLink: "https://akademnashir-weld.vercel.app/",
  },
  {
    title: "Ansormed",
    githubLink: "https://github.com/Nazarovfarhod/ansormed",
    vercelLink: "https://ansormed-xi.vercel.app/",
  },
  {
    title: "My Cart",
    githubLink: "https://github.com/Nazarovfarhod/nazarovfarhod-user-card",
    vercelLink: "https://nazarovfarhod-user-card.vercel.app/",
  },
  {
    title: "Quare-code",
    githubLink: "https://github.com/Nazarovfarhod/quare-code.git",
    vercelLink: "https://quare-code.vercel.app/",
  },
  {
    title: "html-and-css-foundation ",
    githubLink: "https://github.com/Nazarovfarhod/html-and-css-foundation.git",
    vercelLink: "https://nazarovfarhod-user-card-sq6m.vercel.app/",
  },
  {
    title: "Pixer-website",
    githubLink: "https://github.com/Nazarovfarhod/Pixer-website.git",
    vercelLink: "https://pixer-web-site.vercel.app/",
  },
  {
    title: "Uzb_website ",
    githubLink:
      "https://github.com/Nazarovfarhod/Uzb_website.gituzb-website.vercel.app",
    vercelLink: "https://uzb-website.vercel.app/",
  },
  {
    title: "USA-website ",
    githubLink: "https://github.com/Nazarovfarhod/use-website.git",
    vercelLink: "https://use-website.vercel.app/",
  },
  {
    title: "Phones ",
    githubLink: "https://github.com/Nazarovfarhod/Phones.git",
    vercelLink: "https://phones-sooty.vercel.app/",
  },
  {
    title: "Shopify",
    githubLink: "https://github.com/Nazarovfarhod/shopify.git",
    vercelLink: "https://shopify-bay-iota.vercel.app/",
  },
  {
    title: "Taco ",
    githubLink: "https://github.com/Nazarovfarhod/taco.git",
    vercelLink: "https://taco-alpha.vercel.app/",
  },
  {
    title: "Lion ",
    githubLink: "https://github.com/Nazarovfarhod/lion.git",
    vercelLink: "https://lion-lyart-psi.vercel.app",
  },
  {
    title: "My-first_rezyume",
    githubLink: "https://github.com/Nazarovfarhod/my-first_rezyume.git",
    vercelLink: "https://my-first-rezyume.vercel.app",
  },
  {
    title: "Gabrielle Essence Eau De Parfum",
    githubLink:
      "https://github.com/Nazarovfarhod/Gabrielle-Essence-Eau-De-Parfum.git",
    vercelLink: "https://gabrielle-essence-eau-de-parfum-ten.vercel.app/",
  },
  {
    title: "Make remote work",
    githubLink: "https://github.com/Nazarovfarhod/Make-remote-work.git",
    vercelLink: "https://make-remote-work.vercel.app/",
  },
  {
    title: "Splitter",
    githubLink: "https://github.com/Nazarovfarhod/tip-calculator.git",
    vercelLink: "https://tip-calculator-wheat-psi.vercel.app/",
  },
  {
    title: "MOTHER NATURE",
    githubLink: "https://github.com/Nazarovfarhod/bg-video.git",
    vercelLink: "https://bg-video-three.vercel.app/",
  },
  {
    title: "CASTAWAY",
    githubLink: "https://github.com/Nazarovfarhod/Castaway.git",
    vercelLink: "https://castaway-ten-orpin.vercel.app/",
  },
  {
    title: "CREATE-X",
    githubLink: "https://github.com/Nazarovfarhod/create-x.git",
    vercelLink: "https://create-x-2i6r.vercel.app/",
  },
  {
    title: "ANIMATIONS",
    githubLink: "https://8-dars-pearl.vercel.app/",
    vercelLink: "https://github.com/Nazarovfarhod/8-dars.git",
  },
];

const template = document.querySelector("template");
const worksList = document.querySelector(".works__list");

projects.forEach((project) => {
  const clone = template.content.cloneNode(true);

  const title = clone.querySelector(".works__list__title");
  const linkGithub = clone.querySelector(".works__list__link__github");
  const linkVercel = clone.querySelector(".works__list__link__vercel");

  title.textContent = project.title;
  linkGithub.href = project.githubLink;
  linkVercel.href = project.vercelLink;

  worksList.appendChild(clone);
});
