import React from 'react';
import { Text } from 'src/components/Text';
interface FloorRadioButtonGroupProps {
  selectedOption: 'Lease Expiry' | 'Tenant Classification';
  setSelectedOption: React.Dispatch<
    React.SetStateAction<'Lease Expiry' | 'Tenant Classification'>
  >;
}

const FloorRadioButtonGroup: React.FC<FloorRadioButtonGroupProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className='border-2 border-primary grid grid-cols-2 w-full md:w-6/12 md:justify-center rounded-md'>
      <div
        className={`${
          selectedOption === 'Lease Expiry' &&
          'bg-primary text-white transition-all'
        } text-center p-2 cursor-pointer`}
        onClick={() => setSelectedOption('Lease Expiry')}
      >
        <Text
          className={`${
            selectedOption === 'Lease Expiry' && 'text-white'
          } text-xs`}
        >
          Lease Expiry
        </Text>
      </div>
      <div
        className={`${
          selectedOption === 'Tenant Classification' &&
          'bg-primary text-white transition-all'
        } text-center p-2 cursor-pointer`}
        onClick={() => setSelectedOption('Tenant Classification')}
      >
        <Text
          className={`${
            selectedOption === 'Tenant Classification' && 'text-white'
          } text-xs`}
        >
          Tenant Classification
        </Text>
      </div>
    </div>
  );
};

export default FloorRadioButtonGroup;
