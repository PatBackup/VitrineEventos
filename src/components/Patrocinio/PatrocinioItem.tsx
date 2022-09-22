import { ReactNode } from 'react';
import { PatrocinioContainer } from './styles';

interface PatrocinioProps {
  title: string;
  icon: ReactNode;
}

export default function PatrocinioItem({ title, icon }: PatrocinioProps) {
  return (
    <PatrocinioContainer data-aos="zoom-out">
      <p>{title}</p>
      {icon}
    </PatrocinioContainer>
  );
}