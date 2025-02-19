import React from 'react';

const Zipper = () => {
  return (
    <div className="absolute -z-10 w-full h-full overflow-hidden opacity-20">
      {(() => {
        const rows = 3;
        const cols = 30;
        const cellWidth = 70;
        const cellHeight = 150;

        return (
          <>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className="flex">
                {Array.from({ length: cols }).map((_, colIndex) => {
                  const l = colIndex * 2 + Math.sin(colIndex * 0.2) * 40;
                  const tl = 0;
                  const tr = 20;
                  const br = 350;
                  const bl = 350;

                  return (
                    <div key={`col-${colIndex}`}>
                      <svg
                        width={cellWidth}
                        height={cellHeight}
                        viewBox={`0 0 ${cellWidth} ${cellHeight}`}
                      >
                        <defs>
                          <filter id={`noise-${colIndex}`}>
                            <feTurbulence
                              type="fractalNoise"
                              baseFrequency="0.9"
                              numOctaves="2"
                              stitchTiles="stitch"
                            />
                            <feColorMatrix type="saturate" values="1" />
                            <feComponentTransfer>
                              <feFuncR
                                type="linear"
                                slope="1"
                                intercept={`${0.1 * colIndex * 0.05}`}
                              />
                              <feFuncG
                                type="linear"
                                slope="1"
                                intercept={`${0.2 * colIndex * 0.05}`}
                              />
                              <feFuncB
                                type="linear"
                                slope="1.4"
                                intercept={`${0.3 * colIndex * 0.05}`}
                              />
                              <feFuncA type="linear" slope="1" intercept={`${1}`} />
                            </feComponentTransfer>
                          </filter>
                        </defs>
                        <rect
                          width={cellWidth}
                          height={cellHeight}
                          style={{
                            filter: `url(#noise-${colIndex})`,
                            fill: '#333',
                          }}
                        />
                        <polygon
                          points={`${l},${tl} 80, ${tr} 80, ${br} ${l}, ${bl}`}
                          fill="white"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        );
      })()}
    </div>
  );
};

export default Zipper;
