interface Props {
    icon: (prop: React.Component<'svg'>) => JSX.Element
    label: string
}
const IconButton = ({icon: Icon,label}: Props) => {
    return (
        <button className="flex items-center space-x-2 hover:text-white">
            <Icon className="h-6 w-6 text-gray-500" />
            <span>{label}</span>   
        </button>
    );
}

export default IconButton;