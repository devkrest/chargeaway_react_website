import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IInputProps {
  htmlFor: string;
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  value: string;
  index: number;
  handleOnChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputWithLabel({
  htmlFor,
  label,
  type,
  placeholder,
  value,
  index,
  handleOnChangeValue,
}: IInputProps) {
  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        enterKeyHint="next"
        tabIndex={index}
        className="w-full  sm:w-[30rem]"
        type={type}
        id={htmlFor}
        placeholder={placeholder}
        value={value}
        name={htmlFor}
        onChange={handleOnChangeValue}
      />
    </div>
  );
}
