type ImagePlaceholderProps = {
  description: string;
  orientation: string;
  compact?: boolean;
};

export function ImagePlaceholder({ description, orientation, compact = false }: ImagePlaceholderProps) {
  return (
    <div className={compact ? "image-placeholder image-placeholder--compact" : "image-placeholder"} role="img" aria-label={`Espaço reservado. ${description}. Formato circular, proporção 1 por 1. ${orientation}.`}>
      <span className="image-placeholder__label">Imagem futura</span>
      {!compact && <span className="image-placeholder__description">{description}</span>}
      <span className="image-placeholder__format">Circular · 1:1</span>
      {!compact && <span className="image-placeholder__orientation">{orientation}</span>}
    </div>
  );
}
