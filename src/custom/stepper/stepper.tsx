import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {ReactComponent as CheckCircleIcon} from '../../svgs/success.svg';
import {ReactComponent as CircleOutlinedIcon} from '../../svgs/circle.svg';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(() => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#4CAF4F',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#4CAF4F',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ ownerState }) => ({
    color: '#4CAF4F',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#4CAF4F',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#4CAF4F',
      zIndex: 1,
      fontSize: 32,
    },
    '& .QontoStepIcon-circle': {
      width: 32,
      height: 32,
      borderRadius: '50%',
      backgroundColor: 'transparent',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckCircleIcon width={32} height={32} className="QontoStepIcon-completedIcon" />
      ) : (
        
        <CircleOutlinedIcon className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

interface StepperProps {
    steps: string[]
}

const CustomStepper: React.FC<StepperProps> = ({steps}) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
    </Stack>
  );
}

export default CustomStepper;