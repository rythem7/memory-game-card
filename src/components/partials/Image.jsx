export default function Image({src}) {
    return(
        <svg className="w-full h-full" viewBox="0 0 100 150">
            <image href={src} width="100" height="150" />
        </svg>
    );
}