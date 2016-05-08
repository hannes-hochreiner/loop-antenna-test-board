# Test Board for a Loop Antenna
Breadboard compatible test board for a loop antenna using an RFM69W module.

## Trace width

There are quite a few impedance calculators for PCB traces.
I chose [one](http://www.eeweb.com/toolbox/microstrip-impedance) at random.
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

## References
  * [J. Van Niekerk, et al "Loop Antenna Basics and Regulatory Compliance for Short-Range Radio," microchip.com retrieved 2016-05-06]( http://ww1.microchip.com/downloads/en/DeviceDoc/RFA1%20parts%205%206%20b.pdf)
