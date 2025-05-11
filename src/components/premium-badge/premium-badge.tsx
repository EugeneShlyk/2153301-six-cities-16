type TPremiumBadge = {
  isPremium: boolean;
  extraClassName: string;
}

export default function PremiumBadge({isPremium, extraClassName}: TPremiumBadge) {
  return (
    isPremium && (
      <div className={extraClassName}>
        <span>Premium</span>
      </div>
    )
  );
}
