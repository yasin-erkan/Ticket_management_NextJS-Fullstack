import { FC } from "react";

interface Props {
    children: React.ReactNode;
    label: string;
}

const FieldSet: FC<Props> = ({ children, label }) => {
    return (
        // ! fieldset is used as HOC for the form
        <fieldset>
            <label className="block text-sm mb-1">
                {label} <span className="text-red-500">*</span>
            </label>

            {children}
        </fieldset>
    );
};

export default FieldSet;