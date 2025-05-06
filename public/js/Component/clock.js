export default function clock() {
    return `
    <div class="flex items-center justify-between count-down gap-2 font-monos text-base text-red-500 w-46 h-20">
        <div class="hours flex-2 h-full text-center ">
            <span class="hours block m-auto font-mono clock-fonts font-bold h-full leading-20 w-full text-3xl">00</span>
        </div>
        <span class = "leading-18 block h-full text-xl clock-fonts  text-gray-700">:</span>
        <div class="hours flex-2 h-full text-center ">
            <span class="hours block m-auto font-mono font-bold clock-fonts  h-full leading-20 w-full text-3xl">00</span>
        </div>
        <span class = "leading-18 block h-full text-xl clock-fonts  text-gray-700">:</span>
        <div class="hours flex-2 h-full text-center">
            <span class="hours block m-auto font-mono font-bold h-full clock-fonts  leading-20 w-full text-3xl">00</span>
        </div>
    </div>
    `
}