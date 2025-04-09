import React from "react";

export default function Image({src, width = "100", height = "150"}) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const handleError = () => {
        console.error("Image failed to load");
        setError(true);
    };

    const handleLoad = () => {
        setLoading(false);
    };

    return(
        <svg className="w-full h-full" viewBox={`0 0 ${width} ${height}`}>
            {loading && <rect width={width} height={height} fill="#f0f0f0" />}
            {!error ? (
                <image 
                    href={src} 
                    width={width} 
                    height={height} 
                    onError={handleError}
                    onLoad={handleLoad}
                    loading="lazy"
                />
            ) : (
                <g>
                    <rect width={width} height={height} fill="#f5f5f5" />
                    <text x="50%" y="50%" textAnchor="middle" fill="#999">
                        Image failed to load
                    </text>
                </g>
            )}
        </svg>
    );
}