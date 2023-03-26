import { IconType } from '@/domain/models/profile-data-model'
import type { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const availableIcons = new Map<IconType, IconDefinition>([
  [IconType.Github, faGithub],
  [IconType.LinkedIn, faLinkedin],
  [IconType.Facebook, faFacebook],
  [IconType.Instagram, faInstagram],
  [IconType.Youtube, faYoutube],
  [IconType.Twitter, faTwitter],
  [IconType.ArrowUpRightFromSquare, faArrowUpRightFromSquare]
])

export const getIcon = (icon: IconType): IconDefinition =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  availableIcons.get(icon) ?? ({} as IconDefinition)
