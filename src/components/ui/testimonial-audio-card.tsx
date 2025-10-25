import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Volume2, Play, Pause } from "lucide-react";

interface TestimonialAudioCardProps extends React.HTMLAttributes<HTMLDivElement> {
  audioSrc: string;
  personName?: string;
  roleCompany: string;
  description?: string;
  logoSrc?: string;
  brandColor?: string; // optional accent color
}

const formatTime = (seconds: number) => {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const TestimonialAudioCard: React.FC<TestimonialAudioCardProps> = ({ audioSrc, personName, roleCompany, description, logoSrc, brandColor, className, ...props }) => {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => setDuration(audio.duration || 0);
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    const newTime = (value / 100) * (duration || 0);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progress = duration ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;
  const accent = brandColor || "#ffcc00"; // default Treinta-like yellow

  return (
    <Card className={className} {...props}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
              <Volume2 className="h-5 w-5" />
            </div>
            <div className="flex-1">
              {personName && <CardTitle className="text-base md:text-lg">{personName}</CardTitle>}
              <CardDescription className="text-sm">{roleCompany}</CardDescription>
            </div>
          </div>
          <div className="h-9 w-9 rounded-md overflow-hidden bg-muted flex items-center justify-center flex-shrink-0 border">
            {logoSrc ? (
              <img src={logoSrc} alt="logo" className="w-full h-full object-contain" loading="lazy" />
            ) : (
              <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: accent }}>
                <span className="text-white font-bold">T</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-4">
        {description && (
          <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
        )}
        <div className="rounded-lg border bg-card/60 p-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className="h-10 w-10 rounded-full flex items-center justify-center border"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <div className="flex-1 flex items-center gap-3">
              <span className="text-xs tabular-nums text-muted-foreground w-10 text-right">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={progress}
                onChange={onSeek}
                className="w-full accent-primary"
                aria-label="Progreso del audio"
              />
              <span className="text-xs tabular-nums text-muted-foreground w-10">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={audioSrc}
          preload="none"
          controls={false}
          controlsList="nodownload noplaybackrate"
          onContextMenu={(e) => e.preventDefault()}
        />
      </CardContent>
    </Card>
  );
};

export default TestimonialAudioCard;


