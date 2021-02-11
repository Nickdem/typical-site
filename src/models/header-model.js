import { HeaderBlock } from "../classes/blocks";
import logo from '../assets/logo.png'

export const headerModel = new HeaderBlock({logo, links: [
  {name: 'О нас', to: '/about'},
  {name: 'Портфолио', to: '/portfolio'},
  {name: 'Отзывы', to: '/reviews'},
  {name: 'Контакты', to: '/contacts'}
]})
