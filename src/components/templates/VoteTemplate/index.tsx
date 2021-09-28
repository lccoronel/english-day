/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import cakerList from '../../../helper/cakerList';
import AtomTitleTextLarge from '../../atoms/AtomTitleTextLarge';
import MoleculeButton from '../../molecules/MoleculeButton';
import MoleculeChooseCakerButton from '../../molecules/MoleculeChooseCakerButton';
import OrganismChooseCakerModal, {
  ModalHandles,
} from '../../organism/OrganismChooseCakerModal';

import { Container, ScrollViewCakers, ContainerScroll } from './styles';

const VoteTemplate: React.FC = () => {
  const modalRef = useRef<ModalHandles>(null);
  const { navigate } = useNavigation();
  const { colors } = useTheme();

  function handleChooseCaker() {
    modalRef.current?.openModal();
  }

  return (
    <Container>
      <AtomTitleTextLarge color={colors.black}>
        Choose some caker for our english day
      </AtomTitleTextLarge>

      <ContainerScroll>
        <ScrollViewCakers>
          {cakerList.map((caker, index) => (
            <MoleculeChooseCakerButton
              onPress={handleChooseCaker}
              key={index}
              name={caker.name}
              position={caker.position}
              sourceUrl={caker.avatar}
            />
          ))}
        </ScrollViewCakers>
      </ContainerScroll>

      <MoleculeButton
        title="Finish"
        color={colors.blue_500}
        onPress={() => navigate('home')}
      />

      <OrganismChooseCakerModal ref={modalRef} />
    </Container>
  );
};

export default VoteTemplate;
