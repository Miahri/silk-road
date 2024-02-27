import React, {FC} from 'react';
import container from "../../common/styles/Container.module.css";
import styles from "./NoveltyPage.module.css";
import {NoveltyCard, NoveltyCardType} from "./NoveltyCard/NoveltyCard";
import wrapper from "../../common/styles/Wrapper.module.css";
import {v1} from "uuid";
import {NavLink} from "react-router-dom";

export let noveltyArr: Array<NoveltyCardType> = [
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/957/home_living_interior_ppt_template_for_pitch_deck_956907.jpg",
    name: "Plants",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/746/branding_project_pitch_deck_powerpoint_ppt_745504.jpg",
    name: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/957/home_living_interior_ppt_template_for_pitch_deck_956907.jpg",
    name: "Syoss Repair",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/957/home_living_interior_ppt_template_for_pitch_deck_956907.jpg",
    name: "Plants",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/746/branding_project_pitch_deck_powerpoint_ppt_745504.jpg",
    name: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/957/home_living_interior_ppt_template_for_pitch_deck_956907.jpg",
    name: "Syoss Repair",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/957/home_living_interior_ppt_template_for_pitch_deck_956907.jpg",
    name: "Plants",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/746/branding_project_pitch_deck_powerpoint_ppt_745504.jpg",
    name: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  },
  {id: v1(),
    photo: "https://imgscf.slidemembers.com/docs/1/1/957/home_living_interior_ppt_template_for_pitch_deck_956907.jpg",
    name: "Syoss Repair",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias architecto, asperiores dolor exercitationem quod tempora.",
    cost: '150 $/шт'
  }
]

type NoveltySectionPropsType = {
  styles: string
}

export const NoveltyPage: FC<NoveltySectionPropsType> = (props) => {
  const arr = props.styles !== '' ? noveltyArr.slice(0, 3) : noveltyArr;

  return (
    <div className={props.styles}>
      <div className={`${container.container} ${styles.container}`}>
        <NavLink to={'/new-products'}><h2>Новинки</h2></NavLink>
        <div className={wrapper.wrapper}>
          {arr.map(pr => <NoveltyCard key={pr.id} novelty={pr}/>)}
        </div>
      </div>
    </div>
  );
};