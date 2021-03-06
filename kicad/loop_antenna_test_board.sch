EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:loop_antenna_test_board
LIBS:loop_antenna_test_board-cache
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title "Loop Antenna Test Board"
Date "2016-05-08"
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L RFM69W R1
U 1 1 572ED50E
P 5000 2950
F 0 "R1" H 5450 2250 60  0000 C CNN
F 1 "RFM69W" H 5000 2950 60  0000 C CNN
F 2 "loop_antenna_test_board:RFM69W" H 5050 3200 60  0001 C CNN
F 3 "" H 5050 3200 60  0000 C CNN
	1    5000 2950
	1    0    0    -1  
$EndComp
$Comp
L RFM69W_BB R2
U 1 1 572ED573
P 5000 4750
F 0 "R2" H 5450 4050 60  0000 C CNN
F 1 "RFM69W_BB" H 5000 4750 60  0000 C CNN
F 2 "loop_antenna_test_board:RFM69W_BB" H 5050 5000 60  0001 C CNN
F 3 "" H 5050 5000 60  0000 C CNN
	1    5000 4750
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR2
U 1 1 572ED736
P 5850 3600
F 0 "#PWR2" H 5850 3350 50  0001 C CNN
F 1 "GND" H 5850 3450 50  0000 C CNN
F 2 "" H 5850 3600 50  0000 C CNN
F 3 "" H 5850 3600 50  0000 C CNN
	1    5850 3600
	1    0    0    -1  
$EndComp
Wire Wire Line
	5850 2400 5850 3600
Wire Wire Line
	5850 3450 5750 3450
Wire Wire Line
	5850 3150 5750 3150
Connection ~ 5850 3450
Wire Wire Line
	5850 2400 5750 2400
Connection ~ 5850 3150
Entry Wire Line
	5950 2700 6050 2800
Entry Wire Line
	5950 2850 6050 2950
Entry Wire Line
	5950 4800 6050 4700
Entry Wire Line
	5950 4650 6050 4550
Entry Wire Line
	5950 4500 6050 4400
Wire Wire Line
	5750 2700 5950 2700
Wire Wire Line
	5950 2850 5750 2850
Wire Wire Line
	5950 4500 5750 4500
Wire Wire Line
	5750 4650 5950 4650
Wire Wire Line
	5950 4800 5750 4800
Entry Wire Line
	5950 3000 6050 3100
Wire Bus Line
	6050 2800 6050 4700
Wire Wire Line
	5950 3000 5750 3000
Wire Wire Line
	5750 4350 6650 4350
Wire Wire Line
	6650 4350 6650 2550
Wire Wire Line
	6650 2550 5750 2550
Wire Wire Line
	5750 4200 5750 3900
Wire Wire Line
	5750 3900 3850 3900
Wire Wire Line
	3850 3900 3850 2400
Wire Wire Line
	3850 2400 4250 2400
Entry Wire Line
	3950 2650 4050 2550
Entry Wire Line
	3950 2800 4050 2700
Entry Wire Line
	3950 2950 4050 2850
Entry Wire Line
	3950 3100 4050 3000
Entry Wire Line
	3950 3250 4050 3150
Entry Wire Line
	3950 3400 4050 3300
Entry Wire Line
	3950 4250 4050 4350
Entry Wire Line
	3950 4400 4050 4500
Entry Wire Line
	3950 4550 4050 4650
Entry Wire Line
	3950 4700 4050 4800
Entry Wire Line
	3950 4850 4050 4950
Entry Wire Line
	3950 5000 4050 5100
Wire Bus Line
	3950 2650 3950 5000
Wire Wire Line
	4250 2550 4050 2550
Wire Wire Line
	4050 2700 4250 2700
Wire Wire Line
	4250 2850 4050 2850
Wire Wire Line
	4250 3000 4050 3000
Wire Wire Line
	4250 3150 4050 3150
Wire Wire Line
	4250 3300 4050 3300
Wire Wire Line
	4050 4350 4250 4350
Wire Wire Line
	4250 4500 4050 4500
Wire Wire Line
	4050 4650 4250 4650
Wire Wire Line
	4250 4800 4050 4800
Wire Wire Line
	4050 4950 4250 4950
Wire Wire Line
	4250 5100 4050 5100
$Comp
L GND #PWR4
U 1 1 572EDE5A
P 6050 5150
F 0 "#PWR4" H 6050 4900 50  0001 C CNN
F 1 "GND" H 6050 5000 50  0000 C CNN
F 2 "" H 6050 5150 50  0000 C CNN
F 3 "" H 6050 5150 50  0000 C CNN
	1    6050 5150
	1    0    0    -1  
$EndComp
Wire Wire Line
	6050 5150 6050 5100
Wire Wire Line
	6050 5100 5750 5100
$Comp
L +3V3 #PWR1
U 1 1 572EDEB9
P 4150 3550
F 0 "#PWR1" H 4150 3400 50  0001 C CNN
F 1 "+3V3" H 4150 3690 50  0000 C CNN
F 2 "" H 4150 3550 50  0000 C CNN
F 3 "" H 4150 3550 50  0000 C CNN
	1    4150 3550
	-1   0    0    1   
$EndComp
Wire Wire Line
	4150 3550 4150 3450
Wire Wire Line
	4150 3450 4250 3450
Text Label 4050 2550 0    60   ~ 0
DIO0
Text Label 4050 4350 0    60   ~ 0
DIO0
Text Label 4050 2700 0    60   ~ 0
DIO1
Text Label 4050 2850 0    60   ~ 0
DIO2
Text Label 4050 3000 0    60   ~ 0
DIO3
Text Label 4050 3150 0    60   ~ 0
DIO4
Text Label 4050 3300 0    60   ~ 0
DIO5
Text Label 4050 4500 0    60   ~ 0
DIO1
Text Label 4050 4650 0    60   ~ 0
DIO2
Text Label 4050 4800 0    60   ~ 0
DIO3
Text Label 4050 4950 0    60   ~ 0
DIO4
Text Label 4050 5100 0    60   ~ 0
DIO5
Text Label 5750 2700 0    60   ~ 0
MOSI
Text Label 5750 2850 0    60   ~ 0
MISO
Text Label 5750 3000 0    60   ~ 0
SCK
Text Label 5750 4650 0    60   ~ 0
MISO
Text Label 5750 4500 0    60   ~ 0
MOSI
Text Label 5750 4800 0    60   ~ 0
SCK
Wire Wire Line
	5850 5350 5850 5250
Wire Wire Line
	5850 5250 5750 5250
$Comp
L +3V3 #PWR3
U 1 1 572EEA16
P 5850 5350
F 0 "#PWR3" H 5850 5200 50  0001 C CNN
F 1 "+3V3" H 5850 5490 50  0000 C CNN
F 2 "" H 5850 5350 50  0000 C CNN
F 3 "" H 5850 5350 50  0000 C CNN
	1    5850 5350
	-1   0    0    1   
$EndComp
Text Label 6150 3800 0    60   ~ 0
SPI_BUS
Text Label 3500 4100 0    60   ~ 0
DIO_BUS
$Comp
L C C1
U 1 1 572EEDE1
P 7250 3500
F 0 "C1" H 7275 3600 50  0000 L CNN
F 1 "C" H 7275 3400 50  0000 L CNN
F 2 "loop_antenna_test_board:CAP" H 7288 3350 50  0001 C CNN
F 3 "" H 7250 3500 50  0000 C CNN
	1    7250 3500
	1    0    0    -1  
$EndComp
$Comp
L CTRIM C2
U 1 1 572EEE5B
P 7250 4600
F 0 "C2" H 7310 4520 50  0000 C CNN
F 1 "CTRIM" H 7370 4460 50  0000 C CNN
F 2 "loop_antenna_test_board:CAP_TUNABLE" H 7250 4600 50  0001 C CNN
F 3 "" H 7250 4600 50  0000 C CNN
	1    7250 4600
	1    0    0    -1  
$EndComp
Wire Wire Line
	5750 3300 7250 3300
Wire Wire Line
	7250 2750 7250 3350
Wire Wire Line
	7250 3650 7250 4450
Wire Wire Line
	7250 4750 7250 4950
Wire Wire Line
	7250 4950 8200 4950
Wire Wire Line
	8200 4950 8200 2750
Wire Wire Line
	8200 2750 7250 2750
Connection ~ 7250 3300
$Comp
L GND #PWR5
U 1 1 572EEF56
P 6950 3900
F 0 "#PWR5" H 6950 3650 50  0001 C CNN
F 1 "GND" H 6950 3750 50  0000 C CNN
F 2 "" H 6950 3900 50  0000 C CNN
F 3 "" H 6950 3900 50  0000 C CNN
	1    6950 3900
	1    0    0    -1  
$EndComp
Wire Wire Line
	6950 3900 6950 3800
Wire Wire Line
	6950 3800 7250 3800
Connection ~ 7250 3800
Text Label 7550 3850 0    60   ~ 0
ANTENNA
$EndSCHEMATC
