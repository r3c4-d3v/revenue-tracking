import {
    ApplicationLogoSvg,
    LogoProps,
    svgShape,
} from "@/Components/ApplicationLogo/barrel";

const ApplicationLogo = (props: LogoProps): ApplicationLogoSvg => (
    <svg {...props} viewBox="0 0 316 316" xmlns="http://www.w3.org/2000/svg">
        <path d={svgShape} />
    </svg>
);

export default ApplicationLogo;
