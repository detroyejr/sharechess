import { Component, Show } from "solid-js";
import { setState, state } from "../../state";
import FullscreenPopup from "./reusable/FullscreenPopup";

import "./Support.css";

const About: Component = () => {
  return (
    <Show when={state.fullscreenPopup === "support"}>
      <FullscreenPopup
        class="support"
        onCLose={() => setState("fullscreenPopup", null)}
      >
        <p class="support__intro">
          If you like what I'm doing, you can support the project financially,
          contribute your work and ideas, and share the projects with others.
        </p>

        <div class="support__methods">
          <div class="support__method">
            <img class="support__ico" src="img/github.svg" alt="contribute" />
            <h2 class="support__title">Help improve the website</h2>
            <p class="support__description">
              You can suggest improvements and report bugs via{" "}
              <a
                href="https://github.com/sharechess/sharechess/issues"
                target="_blank"
              >
                GitHub Issues
              </a>{" "}
              or by messaging me on{" "}
              <a
                href="https://www.reddit.com/message/compose/?to=kap89&subject=ShareChess%20issue"
                target="_blank"
              >
                Reddit.
              </a>
            </p>
            <p class="support__description">
              If you are a programmer, you can contribute to the project
              directly. Yu can find the source code on my{" "}
              <a
                href="https://github.com/sharechess/sharechess"
                target="_blank"
              >
                GitHub Page.
              </a>
            </p>
          </div>
          <div class="support__method">
            <img
              class="support__ico support__ico--coffee"
              src="img/donate.svg"
              alt="donate"
            />
            <h2 class="support__title">Buy me a coffee</h2>
            <p class="support__description">
              The project is free for everyone, and does not use ads or
              trackers. It takes some time and effort, but I'm fine supporting
              it on my own.
            </p>
            <p class="support__description">
              If you really want to, you can help fuel the development of the
              project by buying me a symbolic coffee!
            </p>
            <a
              href="https://www.buymeacoffee.com/maciejcaderek"
              target="_blank"
              class="support__donate-btn btn"
            >
              DONATE
            </a>
          </div>
          <div class="support__method">
            <img class="support__ico" src="img/artists.svg" alt="design" />
            <h2 class="support__title">Design a chessboard or piece set</h2>
            <p class="support__description">
              If you are an artist, or just like to create stuff, you can submit
              a new board design or a piece set.
            </p>
            <p class="support__description">
              You can find instructions on how to prepare the assets on my{" "}
              <a
                href="https://github.com/sharechess/sharechess#designing-new-boards-and-piece-sets"
                target="_blank"
              >
                GitHub page.
              </a>
            </p>
            <p class="support__description">
              Message me on{" "}
              <a
                href="https://www.reddit.com/message/compose/?to=kap89&subject=ShareChess%20design"
                target="_blank"
              >
                Reddit
              </a>{" "}
              or open a{" "}
              <a
                href="https://github.com/sharechess/sharechess/issues"
                target="_blank"
              >
                GitHub issue
              </a>{" "}
              to coordinate the details.
            </p>
          </div>
        </div>
        <hr />
        <div class="support__share">
          <p class="support__subreddit">
            Follow my{" "}
            <a href="https://www.reddit.com/r/sharechess/" target="_blank">
              subreddit
            </a>{" "}
            for news, updates, and chess-related content!
          </p>
          <p class="support__share-intro">
            Share the project with others, to help it grow!
          </p>
          <div class="share__targets">
            {/* <!-- Sharingbutton Facebook --> */}
            <a
              class="resp-sharing-button__link"
              href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsharechess.github.io"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </div>
                Facebook
              </div>
            </a>

            {/* <!-- Sharingbutton Twitter --> */}
            <a
              class="resp-sharing-button__link"
              href="https://twitter.com/intent/tweet/?text=ShareChess%20-%20chess%20with%20style!&amp;url=https%3A%2F%2Fsharechess.github.io"
              target="_blank"
              rel="noopener"
              aria-label="Twitter"
            >
              <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                  </svg>
                </div>
                Twitter
              </div>
            </a>

            {/* <!-- Sharingbutton E-Mail --> */}
            <a
              class="resp-sharing-button__link"
              href="mailto:?subject=ShareChess%20-%20chess%20with%20style!&amp;body=https%3A%2F%2Fsharechess.github.io"
              target="_self"
              rel="noopener"
              aria-label="E-Mail"
            >
              <div class="resp-sharing-button resp-sharing-button--email resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.25 14.43l-3.5 2c-.08.05-.17.07-.25.07-.17 0-.34-.1-.43-.25-.14-.24-.06-.55.18-.68l3.5-2c.24-.14.55-.06.68.18.14.24.06.55-.18.68zm4.75.07c-.1 0-.2-.03-.27-.08l-8.5-5.5c-.23-.15-.3-.46-.15-.7.15-.22.46-.3.7-.14L12 13.4l8.23-5.32c.23-.15.54-.08.7.15.14.23.07.54-.16.7l-8.5 5.5c-.08.04-.17.07-.27.07zm8.93 1.75c-.1.16-.26.25-.43.25-.08 0-.17-.02-.25-.07l-3.5-2c-.24-.13-.32-.44-.18-.68s.44-.32.68-.18l3.5 2c.24.13.32.44.18.68z" />
                  </svg>
                </div>
                E-Mail
              </div>
            </a>

            {/* <!-- Sharingbutton Reddit --> */}
            <a
              class="resp-sharing-button__link"
              href="https://reddit.com/submit/?url=https%3A%2F%2Fsharechess.github.io&amp;resubmit=true&amp;title=ShareChess%20-%20chess%20with%20style!"
              target="_blank"
              rel="noopener"
              aria-label="Reddit"
            >
              <div class="resp-sharing-button resp-sharing-button--reddit resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z" />
                  </svg>
                </div>
                Reddit
              </div>
            </a>

            {/* <!-- Sharingbutton WhatsApp --> */}
            <a
              class="resp-sharing-button__link"
              href="whatsapp://send?text=ShareChess%20-%20chess%20with%20style!%20https%3A%2F%2Fsharechess.github.io"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              <div class="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z" />
                  </svg>
                </div>
                WhatsApp
              </div>
            </a>

            {/* <!-- Sharingbutton Telegram --> */}
            <a
              class="resp-sharing-button__link"
              href="https://telegram.me/share/url?text=ShareChess%20-%20chess%20with%20style!&amp;url=https%3A%2F%2Fsharechess.github.io"
              target="_blank"
              rel="noopener"
              aria-label="Telegram"
            >
              <div class="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  class="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z" />
                  </svg>
                </div>
                Telegram
              </div>
            </a>
          </div>
        </div>
      </FullscreenPopup>
    </Show>
  );
};

export default About;
