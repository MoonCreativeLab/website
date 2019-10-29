const getJobUrl = jobTitle => {
  const jobImages = [
    "communication",
    "data",
    "design",
    "developer",
    "interact"
  ];
  const titleImage =
    jobImages.find(i => jobTitle.includes(i)) ||
    `random${Math.ceil(Math.random() * 4)}`;
  return `./library/images/jobs/${titleImage}.png`;
};

const getJobPostHtml = (image, title, link, level) => `
<div class="jobs-section-item">
    <img src=${image} />
    <div class="jobs-section-item-desc yellow-back">
        <div class="job-title">
            <b>${title}</b>
            ${level ? `<span class="Gilroy-Regular">(${level})</span>` : ""}
        </div>
        <a href=${link} target="_blank" class="Gilroy-Regular">Read More</a>
    </div>
</div>
`;

$(document).ready(function() {
  fetch("https://boards-api.greenhouse.io/v1/boards/moon/jobs")
    .then(res => res.json())
    .then(res => {
      const { jobs } = res;
      const jobsPostsHtml = jobs
        .map(({ title, absolute_url }) =>
          getJobPostHtml(getJobUrl(title), title, absolute_url)
        )
        .join(" ");
      $("#jobs-section-items").html(jobsPostsHtml);
    })
    .catch(err => err);
});
