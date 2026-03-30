import { Select} from "@radix-ui/themes";

interface SelectOptionsProps {
    selectTitle: string;
    selectOptions: string[];
    placeHolder: string;
}

const SelectDropdown = ({selectTitle, selectOptions, placeHolder}:SelectOptionsProps) => {
  return (

      <Select.Root>
        <Select.Trigger placeholder={placeHolder} />
        <Select.Content>
          <Select.Group>
            <Select.Label>{selectTitle}</Select.Label>
            {selectOptions?.map((option) => (
            <Select.Item key={option} value={option}>{option}</Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
  )
}

export default SelectDropdown

