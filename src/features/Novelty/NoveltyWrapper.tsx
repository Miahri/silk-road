import React, {FC, useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../utils/types";
import {ProductType} from "../../api/types";
import {useActions} from "../../utils/redux-utils";
import {noveltiesActions} from "./index";
import {NoveltyPage} from "./NoveltyPage/NoveltyPage";
import container from "../../common/styles/Container.module.css";
import styles from "./NoveltyPage/NoveltyPage.module.css";

type NoveltyWrapperPropsType = {
  section: boolean
}

export const NoveltyWrapper: FC<NoveltyWrapperPropsType> = ({section}) => {
  const novelties = useSelector<AppRootStateType, ProductType[]>(state => state.novelties);
  const {fetchNoveltiesTC} = useActions(noveltiesActions);

  useEffect(() => {
    fetchNoveltiesTC()
  }, []);

  const content = section ? <NoveltyPage styles={`${container.section} ${styles.section}`} novelties={novelties} />
    : <NoveltyPage styles={''} novelties={novelties} />

  return (
    <>{content}</>
  );
};