import { ProviderTheme } from '@/providers/provider-theme';

type Props = {
  children: Readonly<React.ReactNode>;
};

const Providers = ({ children }: Props) => {
  return (
    <>
      <ProviderTheme>{children}</ProviderTheme>
    </>
  );
};

export default Providers;
