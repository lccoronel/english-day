/* eslint-disable react/no-array-index-key */
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { useTheme } from 'styled-components';

import AtomTitleTextLarge from '../../atoms/AtomTitleTextLarge';
import MoleculeChooseCakerButton from '../../molecules/MoleculeChooseCakerButton';
import cakerList from '../../../helper/cakerList';
import closeImg from '../../../assets/close.png';
import loupeImg from '../../../assets/loupe.png';

import {
  ButtonClose,
  Container,
  Content,
  ImageClose,
  ContainerHeaderModal,
  ContainerInput,
  ImageInput,
  TextInputCaker,
  ScrollViewCakers,
} from './styles';

export interface ModalHandles {
  openModal: () => void;
}

const OrganismChooseCakerModal: React.ForwardRefRenderFunction<ModalHandles> = (
  props,
  ref,
) => {
  const [isVisible, setIsVisible] = useState(false);

  const { colors } = useTheme();

  function openModal() {
    setIsVisible(oldValue => !oldValue);
  }

  useImperativeHandle(ref, () => {
    return { openModal };
  });

  return (
    <Container isVisible={isVisible}>
      <Content>
        <ContainerHeaderModal>
          <AtomTitleTextLarge color={colors.black}>
            Choose a caker
          </AtomTitleTextLarge>

          <ButtonClose onPress={openModal}>
            <ImageClose source={closeImg} />
          </ButtonClose>
        </ContainerHeaderModal>

        <ContainerInput>
          <ImageInput source={loupeImg} />
          <TextInputCaker placeholder="Caker name ..." />
        </ContainerInput>

        <ScrollViewCakers showsVerticalScrollIndicator={false}>
          {cakerList.map((caker, index) => (
            <MoleculeChooseCakerButton
              onPress={openModal}
              key={index}
              name={caker.name}
              position={caker.position}
              sourceUrl={caker.avatar}
            />
          ))}
        </ScrollViewCakers>
      </Content>
    </Container>
  );
};

export default forwardRef(OrganismChooseCakerModal);
