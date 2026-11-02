type Props = {
  image?: string;
  video?: string;
  alt: string;
  className?: string;
};

export function MediaFrame({ image, video, alt, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      {video ? (
        <video
          src={video}
          poster={image || undefined}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      ) : image ? (
        <img src={image} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="grid h-full min-h-64 place-items-center">
          <p className="text-xs tracking-[0.22em] text-muted uppercase">Media</p>
        </div>
      )}
    </div>
  );
}
