

export async function renderSortedPostsTemplateNewtoOld() {
    try {
      const publish = await getPosts();
      const container = document.querySelector(".API-title");
      const sortUpcoming = document.querySelector(".upcoming");
      sortUpcoming.addEventListener("click", function (event) {
        event.preventDefault();
        const sortedPost = sortPostsNewestToOldest(publish);
        const sortedPostContent = sortedPost.map(postsTemplate);
        container.innerHTML = "";
        container.append(...sortedPostContent);
      });
    } catch (error) {
      error;
    }
  }