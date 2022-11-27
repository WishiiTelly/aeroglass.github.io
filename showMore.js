var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }
  
  ready(() => {
      const projects = document.querySelectorAll("div.project-boxes div.boxes.profile");
      const hiddenProjects = [];
  
      let shownMore = false;
      const showMoreButton = document.querySelector("#show-more");
  
  
      for (let i = 4; i < projects.length; i++) {
          const el = projects[i];
  
          el.dataset.autoHidden = "1";
          el.classList.add("hidden");
  
          hiddenProjects.push(el);
      }
  
      showMoreButton.addEventListener("click", () => {
          if (shownMore) {
              for (const el of hiddenProjects) {
                  el.classList.add("hidden");
              }
  
              showMoreButton.children[0].innerText = "Show more";
          } else {
              for (const el of hiddenProjects) {
                  el.classList.remove("hidden");
              }
  
              showMoreButton.children[0].innerText = "Show less";
          }
  
          shownMore = !shownMore;
      })
  });