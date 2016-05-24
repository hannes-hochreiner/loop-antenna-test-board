# Test Board for a Loop Antenna (WIP)
Breadboard compatible test board for a loop antenna using an RFM69W module.

## Trace width

There are quite a few on-line impedance calculators for PCB traces.
I chose [one](http://www.eeweb.com/toolbox/microstrip-impedance) at random.
I also compared the results with the trace calculator built into KiCad.
The required figures I looked up on the [OSH Park site](http://docs.oshpark.com/services/) and [Wikipedia](https://en.wikipedia.org/wiki/FR-4).

  * Trace thickness = 1 oz/ft² (1.37 mil)
  * Substrate hight = 63 mil
  * Trace width = 3 mm
  * Substrate dielectric = 4.35
  * Impedance = 50.4 Ohm

A trace width of 3 mm did not seem feasible to me.
However, as it turns out, reducing the substrate hight also reduces the required trace width.
Luckily, OSH Park also offers a [2 oz service with thinner boards](http://docs.oshpark.com/services/two-layer-hhdc/).

  * Trace thickness = 2.8 mil
  * Substrate hight = 30 mil
  * Trace width = 1.4 mm
  * Substrate dielectric = 4.35
  * Impedance = 50.1 Ohm

## BOM

  * 2 x 1 pF  capacitors (e.g. AVX 08052U1R0BAT2A C0G ESR ~0.1 Ohm at 500 MHz; Farnell: 7568398)
  * 1 x 82 pF capacitor (e.g. AVX 12065A820JAT2A C0G; Farnell: 2332877)
  * 1 x 6-30 pF capacitor (e.g. Murata TZC3P300A110B00 N1200ppm/°C; Farnell: 9528660)

## References
  * [J. Van Niekerk, et al "Loop Antenna Basics and Regulatory Compliance for Short-Range Radio," microchip.com retrieved 2016-05-06]( http://ww1.microchip.com/downloads/en/DeviceDoc/RFA1%20parts%205%206%20b.pdf)
