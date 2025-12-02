import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  className?: string;
  classNameText?: string;
  title: string;
};

export const Button = ({
  className,
  classNameText,
  title,
  ...rest
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-blue-400 w-[400px] rounded-full py-4 ${className}`}
      {...rest}
    >
      <Text
        className={`text-white text-center text-2xl font-boldOnest ${classNameText}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
