<template>
  <div class="calendar">
    <div class="calendar__switcher">
      <c-button
        :disabled="isButtonDisabled('left')"
        @click="prevMonth">
        <icon-arrow-left />
      </c-button>
      <span>{{ monthTitle }}</span>
      <c-button
        :disabled="isButtonDisabled('right')"
        @click="nextMonth">
        <icon-arrow-right />
      </c-button>
    </div>

    <ul class="calendar__week">
      <li v-for="day in weekDays"
          class="calendar__week-day"
          :key="day">
        {{ day }}
      </li>
    </ul>
    <ul class="calendar__month">
      <li
        v-for="(date, i) in daysInMonth"
        :key="i"
        class="calendar__month-day"
        :class="dayClass(date)"
        @mouseenter="onMouseEnter(date)"
        @click="selectDate(date)"
      >
        {{ date.date() }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Dayjs }                     from 'dayjs';
import CButton                       from '@/components/atoms/button.vue';
import { useCalendar }               from '@/hooks/useCalendar';
import IconArrowRight                from '@/components/icons/icon-chevron-right.vue';
import IconArrowLeft                 from '@/components/icons/icon-chevron-left.vue';

export default defineComponent({
  name: 'Calendar',
  components: {
    CButton, IconArrowRight, IconArrowLeft,
  },
  emits: [ 'update:modelValue' ],
  props: {
    modelValue: {
      type: Object as PropType<Dayjs>,
      required: true,
    },
    disabledBtn: {
      default: false,
      type: Boolean,
    },
  },
  setup(props, context) {
    const {
      weekDays,
      monthTitle,
      daysInMonth,
      onMouseEnter,
      isButtonDisabled,
      nextMonth,
      prevMonth,
      dayClass,
      selectDate,
    } = useCalendar(props, context);
    return {
      weekDays,
      monthTitle,
      daysInMonth,
      isButtonDisabled,
      onMouseEnter,
      nextMonth,
      prevMonth,
      dayClass,
      selectDate,
    };
  },
});
</script>

<style scoped lang="scss">
.calendar {
  padding: 1rem;
  font-size: 1.2rem;

  &__switcher {
    font-size: 1.8rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .c-button {
      color: var(--color-accent-dark);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: .4rem;
      width: 3.6rem;
      height: 3.6rem;

      &:disabled {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  &__week {
    display: flex;
    margin: 1rem 0;
    list-style: none;
    text-align: center;
    padding: 0;
    border-bottom: 1px solid var(--color-accent);
  }

  &__week-day {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: center;
    margin-left: -1px;
    margin-top: -1px;
  }

  &__month {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  &__month-day {
    width: 3.4rem;
    height: 3.4rem;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(.range):hover {
      border-radius: 50px;
      background: var(--color-accent);
    }

    &.range {
      background: var(--color-accent);
      height: 80%;
      margin: auto;

      &--rounded-right, &--rounded-right:before {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
      }

      &--rounded-left, &--rounded-left:before {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
      }
    }

    &.start.end:before {
      border-radius: 50px;
    }

    &.start, &.end {
      color: var(--color-white);
      font-weight: 600;
      border-radius: 50px;
      background: var(--color-accent-dark);
      position: relative;
      height: 100%;

      &:before {
        height: 80%;
        margin: auto;
        background: var(--color-accent);
        position: absolute;
        display: block;
        content: '';
        width: 50%;
        z-index: -1;
      }
    }

    &.start:before {
      left: 50%;
    }

    &.end:before {
      left: 0;
    }

    &.disabled.disabled {
      pointer-events: none;
      color: var(--color-primary);
    }
  }
}
</style>
