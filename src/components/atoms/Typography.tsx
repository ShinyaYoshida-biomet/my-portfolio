import { Typography as TP } from '@mui/material';


interface TypographyProps  {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  sx?: object;
}

export const Typography = (
  { variant, children, sx }: TypographyProps
) => { 
  return (
    <TP variant={variant} sx={{
      fontFamily: "CustomFont",
      fontWeight: "bold",
      textAlign: "center",      
      ...sx,
    }}>
      {children}
    </TP>
  )

}