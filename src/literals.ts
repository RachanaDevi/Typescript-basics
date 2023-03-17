// We can annotate with Literal to have an exact value so it means exact or specific

type Quantity = 50 | 100
let quantity: Quantity = 100; // it can only be 100 cannot be other than 50

// can be anything other than numbers as well
type Metric = 'centimetre' | 'inch';
let myMetric: Metric;