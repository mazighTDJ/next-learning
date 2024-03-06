



export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <p>
            Nous sommes au layout de la page login
        </p>

        {children}
    </div>
  );
}
