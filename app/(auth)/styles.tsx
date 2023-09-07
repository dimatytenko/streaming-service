'use client';
import styled from 'styled-components';

import {Media} from '@/theme/breakpoints';

export const FormWrapper = styled.div`
  margin: 0 auto;
`;

export const FormContainer = styled.div`
  width: 450px;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: #fff;

  ${Media.down.m} {
    width: 90vw;
    max-width: 100%;
  }
`;
