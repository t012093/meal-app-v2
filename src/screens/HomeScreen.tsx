import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function HomeScreen() {
    return (
        <scrollView className="bg-gray-50">
            <stackLayout className="p-4">
                <label className="text-2xl mb-4 font-bold text-center text-blue-600">
                    今日の献立
                </label>

                {/* 朝食カード */}
                <stackLayout className="bg-white mb-4 rounded-lg p-4">
                    <label className="text-lg font-bold text-blue-500">朝食</label>
                    <stackLayout className="border-l-4 border-blue-200 pl-3">
                        <label className="text-base mb-1">和風トースト</label>
                        <label className="text-sm text-gray-600">カロリー: 320kcal</label>
                        <label className="text-xs text-gray-500">
                            主食 / タンパク質 / 野菜
                        </label>
                    </stackLayout>
                </stackLayout>

                {/* 昼食カード */}
                <stackLayout className="bg-white mb-4 rounded-lg p-4">
                    <label className="text-lg font-bold text-green-500">昼食</label>
                    <stackLayout className="border-l-4 border-green-200 pl-3">
                        <label className="text-base mb-1">チキンサラダ</label>
                        <label className="text-sm text-gray-600">カロリー: 450kcal</label>
                        <label className="text-xs text-gray-500">
                            タンパク質 / 野菜 / ドレッシング
                        </label>
                    </stackLayout>
                </stackLayout>

                {/* 夕食カード */}
                <stackLayout className="bg-white mb-4 rounded-lg p-4">
                    <label className="text-lg font-bold text-purple-500">夕食</label>
                    <stackLayout className="border-l-4 border-purple-200 pl-3">
                        <label className="text-base mb-1">鮭の塩焼き定食</label>
                        <label className="text-sm text-gray-600">カロリー: 580kcal</label>
                        <label className="text-xs text-gray-500">
                            主食 / 魚 / 副菜2品
                        </label>
                    </stackLayout>
                </stackLayout>

                {/* 栄養バランスカード */}
                <stackLayout className="bg-white rounded-lg p-4">
                    <label className="text-lg font-bold mb-2 text-gray-700">1日の栄養バランス</label>
                    <gridLayout rows="auto" columns="*, *, *" className="text-center">
                        <stackLayout col={0}>
                            <label className="text-sm font-bold text-blue-500">タンパク質</label>
                            <label className="text-xs text-gray-600">65g</label>
                        </stackLayout>
                        <stackLayout col={1}>
                            <label className="text-sm font-bold text-green-500">脂質</label>
                            <label className="text-xs text-gray-600">45g</label>
                        </stackLayout>
                        <stackLayout col={2}>
                            <label className="text-sm font-bold text-purple-500">炭水化物</label>
                            <label className="text-xs text-gray-600">280g</label>
                        </stackLayout>
                    </gridLayout>
                </stackLayout>
            </stackLayout>
        </scrollView>
    );
}