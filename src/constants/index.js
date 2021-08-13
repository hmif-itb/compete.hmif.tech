import DataScienceIcon from '../images/svg/data-science.svg';
import CompetitiveProgrammingIcon from '../images/svg/competitive-programming.svg';
import CaptureTheFlagIcon from '../images/svg/capture-the-flag.svg';
import GameDevelopmentIcon from '../images/svg/game-development.svg';
import UiUxIcon from '../images/svg/ui-ux.svg';
import React from 'react';
import { GiTrophy } from 'react-icons/gi';
import { BsFillInfoSquareFill, BsPeopleCircle } from 'react-icons/bs';

const CONSTANTS = {
  competitions: [
    {
      link: '/data-science',
      displayName: 'Data Science',
      icon: <DataScienceIcon width="110" height="110" />,
    },
    {
      link: '/competitive-programming',
      displayName: 'Competitive Programming',
      icon: <CompetitiveProgrammingIcon width="110" height="110" />,
    },
    {
      link: '/capture-the-flag',
      displayName: 'Capture the Flag',
      icon: <CaptureTheFlagIcon width="110" height="110" />,
    },
    {
      link: '/game-development',
      displayName: 'Game Development',
      icon: <GameDevelopmentIcon width="110" height="110" />,
    },
    {
      link: '/ui-ux',
      displayName: 'UI/UX Competition',
      icon: <UiUxIcon width="110" height="110" />,
    },
  ],
  homeContents: [
    {
      title: 'Compete with HMIF!',
      description:
        'Bersaing adalah keseharian kami. Menjadi yang terbaik adalah minat kami. Di HMIF, kami mau Anda untuk berada di puncak dari setiap aspek kompetisi yang memungkinkan.',
      logo: <GiTrophy />,
    },
    {
      title: `Get The Information!`,
      description: (
        <div>
          Bagi kamu para pencari informasi lomba, jangan sampai ketinggalan info
          dengan informasi lomba yang direkap di{' '}
          <b>
            <a href="https://bit.ly/comp-hmif" rel="noreferrer" target="_blank">
              bit.ly/comp-hmif
            </a>
          </b>
        </div>
      ),
      logo: <BsFillInfoSquareFill />,
    },
    {
      title: 'Learn From The Experts!',
      description: (
        <div>
          Ingin tau cerita para pemenang HMIF? <br /> langsung saja cek{' '}
          <b>
            <a
              href="https://medium.com/hmif-itb/tagged/competition"
              rel="noreferrer"
              target="_blank"
            >
              Medium HMIF Tech
            </a>
          </b>{' '}
          kita!
        </div>
      ),
      logo: <BsPeopleCircle />,
    },
  ],
};

export default CONSTANTS;
