"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function Component() {
    return (
        <ChartContainer
            config={{
                pms: {
                    label: "PMS",
                    color: "#876500",
                },
                it: {
                    label: "IT",
                    color: "#8A3A23",
                },
                int: {
                    label: "INT",
                    color: "#659F4A",
                },
            }}
            className="min-h-[160px] w-full"
        >
            <LineChart
                accessibilityLayer
                data={[
                    { month: "Jan", pms: 70, it: 30, int: 65 },
                    { month: "Feb", pms: 65, it: 40, int: 75 },
                    { month: "Mar", pms: 68, it: 45, int: 85 },
                    { month: "Apr", pms: 85, it: 50, int: 90 },
                    { month: "May", pms: 100, it: 55, int: 88 },
                    { month: "Jun", pms: 80, it: 60, int: 100 },
                ]}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 0,
                }}
            >
                <CartesianGrid strokeDasharray="5 5" stroke="rgba(0, 0, 0, 0.1)" />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={20}
                    tickFormatter={(value) => (value === 0 || value === 100 ? `${value}%` : '')}
                    domain={[0, 100]}
                />

                <ChartTooltip content={<ChartTooltipContent />} />
                <Line
                    type="monotone"
                    dataKey="pms"
                    stroke="var(--color-pms)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-pms)" }}
                />
                <Line
                    type="monotone"
                    dataKey="it"
                    stroke="var(--color-it)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-it)" }}
                />
                <Line
                    type="monotone"
                    dataKey="int"
                    stroke="var(--color-int)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-int)" }}
                />
            </LineChart>
        </ChartContainer>
    )
}