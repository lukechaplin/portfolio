import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitterSquare,
  faLinkedin,
  faInstagramSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="text-2xl font-mono p-15 bg-gradient-to-r from-purple-200">
      <div class="border-t flex flex-col items-center pt-6">
        <div className="flex mb-4 space-x-2">
          <a
            class="hover:scale-150"
            href="https://twitter.com/luke_chap"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a
            class="hover:scale-150"
            href="https://uk.linkedin.com/in/luke-chaplin-70a521b0?trk=people-guest_people_search-card"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            class="hover:scale-150"
            href="https://www.instagram.com/lukechap47/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>

          <a
            class="hover:scale-150"
            href="https://github.com/lukechaplin"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            class="hover:scale-150"
            href="https://drive.google.com/file/d/13GmtEM_WeP09MwC5BT64K0A98SrfvwEs/view?usp=sharing"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFile} />
          </a>
        </div>
        <div className="flex mb-4 space-x-4 "></div>
        <div>{`© Copyright ${new Date().getFullYear()}`}</div>
        <div class="justify-items-center">Luke Chaplin</div>
      </div>
    </footer>
  );
}
