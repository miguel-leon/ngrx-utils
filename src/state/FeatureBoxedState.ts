export type FeatureBoxedState<FeatureName extends string, FeatureState> = { [feature in FeatureName]: FeatureState };
