import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface IInputProps {
  htmlFor: string;
  label: string;
  placeholder: string;
  value: string;
  handleOnChangeValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextareaWithLabel({
  htmlFor,
  label,
  placeholder,
  value,
  handleOnChangeValue,
}: IInputProps) {
  return (
    <div className="grid w-full gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Textarea
        className="w-full sm:w-[30rem]"
        placeholder={placeholder}
        id={htmlFor}
        value={value}
        name={htmlFor}
        onChange={handleOnChangeValue}
      />
    </div>
  );
}
